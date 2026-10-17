// Shell diagnostics are installed before importing the game.
// BEGIN BOOT ERROR HANDLER

			(function () {
				let shown = false
				function show(what, detail, full) {
					// Always in the console, wherever this is running: it is what a bug report
					// is built out of, and poki.captureError picks up the same errors again on
					// its own.
					console.error('[boot]', what, detail || '')
					// On screen only on one of our own hosts, and that is the whole of why this
					// panel exists: mibbon.com is tested on a phone, and a phone has
					// no console to read. On the published game there is a console when one is
					// wanted, so the panel has nothing to add there and plenty to get wrong.
					//
					// What it got wrong: it says "Failed to fetch at
					// poki-sdk-hoist-....js:1:43569", which tells us a great deal and a player
					// nothing -- and it latches on the FIRST message, so one blocked request
					// inside a third-party SDK parked a full-screen error over a game that was
					// running perfectly well. Booted, playable, HUD and all, behind a red box
					// about somebody else's fetch.
					//
					// The console keeps everything either way, and poki.captureError reports
					// the same errors on its own.
					if (!window.__IS_DEV) return
					// The FIRST one. A failure cascades -- one missing module fails every
					// import under it -- and the tenth message is never the useful one.
					if (shown) return
					shown = true
					document.getElementById('initial-loading')?.remove()
					const notice = document.getElementById('status-notice')
					if (!notice) return
					notice.textContent = what + (detail ? '\n' + detail : '')
					notice.style.whiteSpace = 'pre-wrap'
					notice.style.display = 'block'
					addActions(notice, full || what + (detail ? '\n' + detail : ''))
				}

				// Everything below is wrapped. A clipboard that is missing, refused, or
				// behind a permission prompt must not throw out of the one panel whose job
				// is to show what threw -- and the listeners that call show() are the same
				// ones that would catch it, which is a loop worth not starting.
				function addActions(notice, text) {
					try {
						var row = document.createElement('div')
						row.id = 'status-actions'
						// Both marks are drawn rather than fetched: a panel about a failed
						// load cannot go and load an icon of its own.
						var copy = actionButton('status-copy', 'Copy the error and its stack',
							'<rect x="9" y="9" width="11" height="11" rx="2"></rect>'
								+ '<path d="M5 15V5a2 2 0 0 1 2-2h8"></path>')
						copy.addEventListener('click', function () {
							try {
								copyText(report(text))
								copy.className = 'done'
								setTimeout(function () { copy.className = '' }, 1200)
							} catch (e) {}
						})
						var close = actionButton('status-close', 'Close',
							'<path d="M6 6l12 12M18 6L6 18"></path>')
						close.addEventListener('click', function () {
							try { notice.style.display = 'none' } catch (e) {}
						})
						// Most of what lands here ended the boot, and closing the panel leaves the loading screen standing
						// with nothing behind it: another go is the one thing left to offer.
						var reload = actionButton('status-reload', 'Reload',
							'<path d="M20 12a8 8 0 1 1-2.34-5.66"></path><path d="M20 4v5h-5"></path>')
						reload.addEventListener('click', function () {
							try { location.reload() } catch (e) {}
						})
						row.appendChild(copy)
						row.appendChild(reload)
						row.appendChild(close)
						notice.appendChild(row)
					} catch (e) {}
				}

				function actionButton(id, label, paths) {
					var button = document.createElement('button')
					button.id = id
					button.type = 'button'
					button.title = label
					button.setAttribute('aria-label', label)
					button.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true">' + paths + '</svg>'
					return button
				}

				// What goes on the clipboard: the stack, and the three things a report is
				// useless without -- which build, which page, which browser. The version is
				// the deploy stamp, or VERSION.txt when running a checkout.
				function report(text) {
					try {
						var meta = document.querySelector('meta[name="build-version"]')
						var stamped = meta && meta.getAttribute('content')
						// And, on a dev host, whether the import map stamped the modules: a link error with
						// none stamped is a stale module, with all of them it is the build.
						var stampedModules = typeof window.__STAMPED_MODULES === 'number' ? '\nmodules stamped: ' + window.__STAMPED_MODULES : ''
						return [text, '', 'build: ' + (stamped ? 'v' + stamped.trim() : 'version unavailable'),
							'url: ' + location.href, 'ua: ' + navigator.userAgent + stampedModules].join('\n')
					} catch (e) {
						return text
					}
				}

				function copyText(text) {
					try {
						if (navigator.clipboard && navigator.clipboard.writeText) {
							navigator.clipboard.writeText(text).catch(function () { selectAndCopy(text) })
							return
						}
					} catch (e) {}
					selectAndCopy(text)
				}

				// The old way, for the two cases the async API does not cover: a page served
				// over plain http, and an in-app webview that has no clipboard object at all.
				// Both are how this panel gets photographed in the first place.
				function selectAndCopy(text) {
					try {
						var area = document.createElement('textarea')
						area.value = text
						area.setAttribute('readonly', '')
						area.style.position = 'fixed'
						area.style.top = '-1000px'
						document.body.appendChild(area)
						area.select()
						area.setSelectionRange(0, text.length)
						document.execCommand('copy')
						document.body.removeChild(area)
					} catch (e) {}
				}
				// Whether a file that failed to load was ours to load. Everything this game
				// ships is served from its own origin -- modules, packs, meshes, textures,
				// audio -- and inline data: and blob: URLs are its own too. The only things
				// that are not are the Poki SDK and the ad loader IT fetches, and an ad
				// blocker stops one or the other on a developer's machine most runs.
				//
				// That is not a broken game and must not look like one: script/poki.js is
				// written from end to end around the SDK not being there, so a blocked
				// imasdk.googleapis.com/js/sdkloader/ima3.js costs the run its ads and nothing
				// else. A URL that will not even parse is treated as ours, because a panel
				// about a file this page did ask for is the case worth keeping.
				function ours(url) {
					try {
						var parsed = new URL(url, location.href)
						return parsed.protocol === 'data:' || parsed.protocol === 'blob:'
							|| parsed.origin === location.origin
					} catch (e) {
						return true
					}
				}
				window.__showBootError = show
				// The game's own load and start failures get the same buttons -- on every host:
				// those are the ones a player photographs. See showNotice in main.js.
				window.__addNoticeActions = addActions
				addEventListener('error', (event) => {
					// A failed <script>/<img>/<link> fires this on the element rather than on
					// the window, and carries no message at all -- which is also how it is told
					// apart from an exception thrown inside an inline handler, where the target
					// is an element too.
					var element = event.target && event.target !== window && event.target.tagName
						? event.target : null
					if (element && !event.message) {
						// Where it was coming from. A <link> says href where a script says src,
						// and a media element that has moved on says currentSrc. Reading only
						// src is what put "Something went wrong" on screen with nothing under
						// it: a <link> failing fell past this and out the bottom of an
						// exception handler that had no exception to describe.
						var url = String(element.src || element.href || element.currentSrc || '')
						// A third party is still said, because a blocked SDK is worth knowing
						// about when you go looking. It is the PANEL that is wrong for it: it
						// latches on the first thing it is told and would then have nothing
						// left to say about the game itself.
						if (url && !ours(url)) {
							console.warn('[boot] a third party did not load:', url)
							return
						}
						// No URL on it at all: the element itself, named, rather than the
						// fallback sentence. Something that cannot be attributed on our own
						// page is exactly the case this panel is for.
						var what = url || ('<' + element.tagName.toLowerCase() + '>'
							+ (element.rel ? ' rel=' + element.rel : '')
							+ (element.id ? ' #' + element.id : ''))
						show('Could not load', what, 'Could not load ' + what)
						return
					}
					// The panel shows one line of the stack and the clipboard gets all of it:
					// the frame that threw is what fits on a phone, and the frames under it
					// are what say how it was reached.
					var thrown = event.error
					show(event.message || 'Something went wrong',
						event.filename ? event.filename + ':' + event.lineno : '',
						(event.message || 'Something went wrong') + '\n'
							+ (thrown && thrown.stack ? String(thrown.stack)
								: event.filename ? event.filename + ':' + event.lineno + ':' + event.colno : ''))
				}, true)
				addEventListener('unhandledrejection', (event) => {
					const reason = event.reason
					const said = reason && reason.message ? reason.message : String(reason)
					show(said,
						reason && reason.stack ? String(reason.stack).split('\n')[1] || '' : '',
						said + '\n' + (reason && reason.stack ? String(reason.stack) : ''))
				})
			})()
		
// END BOOT ERROR HANDLER
;

			// The iOS text-magnifier loupe (tap-tap-longpress) ignores user-select:none in
			// current Safari; cancelling the touch default on the game surfaces is what
			// actually stops it. Pointer events still fire, so game input is unaffected.
			// Scoped to the canvases and the loader rather than the document, because the
			// debug menu is real DOM and needs native touch behaviour (scrolling, clicks).
			for (const id of ['canvas', 'ui']) {
				document.getElementById(id)?.addEventListener(
					'touchstart',
					(event) => event.preventDefault(),
					{ passive: false }
				)
			}

			// Worked out by the first script in the head, which needs the answer before
			// this block exists -- the error overlay is gated on it. One copy of
			// script/dev_host.js's list either way, and tools/test/dev_host.test.mjs still
			// reads it and fails if the two disagree.
			const isDev = window.__IS_DEV_HOST
			const params = new URLSearchParams(location.search)

			// The cache-buster, and THE one spelling of what it does to a URL. Everything
			// that busts a cache asks this: the two imports below, script/nocache.js for
			// every texture and glb, and pack.js for the module specifiers it computes.
			// Four copies of `url + '?nocache=' + encodeURIComponent(n)` is four places to
			// get the `?`-versus-`&` wrong in, and the one that got it wrong would be wrong
			// only on a dev host, where nobody is looking for it.
			//
			// Defined before the redirect below rather than inside the else: the debug
			// trigger further down uses it too, and it runs on both paths.
			//
			// data: and blob: URLs are passed through -- glbs carry their textures inline
			// and those are not requests to bust.
			const nocache = isDev ? String(Date.now()) : params.get('nocache')
			// A file the build's table knows goes under its content hash (see index.html): cached until it changes.
			// Anything else -- a checkout, a file outside the table -- goes under the load's stamp as before.
			window.__NOCACHE_URL = (url) => (
				/^(data|blob):/i.test(url) ? url
					: (typeof window !== 'undefined' && window.__FILE_STAMP && window.__FILE_STAMP(url))
						? url + (url.includes('?') ? '&' : '?') + 'v=' + window.__FILE_STAMP(url)
						: nocache
							? url + (url.includes('?') ? '&' : '?') + 'nocache=' + encodeURIComponent(nocache)
							: url
			)

			// Hosted builds carry a deploy stamp. A checkout reads the repository's
			// VERSION.txt once before any game/debug module captures that stamp.
			async function ensureBuildVersion() {
				let meta = document.querySelector('meta[name="build-version"]')
				if (meta?.getAttribute('content')?.trim()) return
				try {
					const response = await fetch(new URL('../VERSION.txt', location.href), { cache: 'no-store' })
					if (!response.ok) throw new Error('HTTP ' + response.status)
					const version = (await response.text()).trim()
					if (!/^[0-9]+\.[0-9]+(-[A-Za-z0-9]+)?$/.test(version)) throw new Error('Invalid VERSION.txt')
					if (!meta) {
						meta = document.createElement('meta')
						meta.name = 'build-version'
						document.head.appendChild(meta)
					}
					meta.setAttribute('content', version)
				} catch (err) {
					console.warn('Could not read the build version', err)
				}
			}
			const buildVersionReady = ensureBuildVersion()

			if (isDev && !params.has('nocache')) {
				params.set('nocache', Date.now())
				location.replace(location.pathname + '?' + params.toString() + location.hash)
			} else {
				// Caught, not left to float: a dynamic import that rejects is an unhandled
				// rejection, and an unhandled rejection is a black screen with the reason
				// in a console nobody on a phone can open.
				// One more try after a short wait: most boot failures in the error log are a
				// chunk the CDN did not serve, mid-deploy or on a flaky connection. The module
				// map remembers a URL that failed, so the second attempt asks under a new one.
				// The stamp has done its work -- it is what made THIS load a fresh fetch -- and is taken
				// back off the address bar: whatever saves the address from here (Add to Home
				// Screen, a bookmark) would otherwise save a stamp, and a launch from it would carry
				// no redirect to a new one. Clean, it arrives without one and is sent round again.
				// The dev worker that stamped module requests for a few builds is gone -- index.html's import map does
				// that now, in the page itself -- and one still installed on a tester's phone is sent away.
				if (isDev && 'serviceWorker' in navigator) {
					navigator.serviceWorker.getRegistrations()
						.then((registrations) => registrations.forEach((registration) => registration.unregister()))
						.catch(() => {})
				}
				if (isDev) {
					const clean = new URLSearchParams(location.search)
					clean.delete('nocache')
					const query = clean.toString()
					// Cosmetic, so never allowed to stop the boot: an opaque-origin frame refuses it.
					try { history.replaceState(history.state, '', location.pathname + (query ? '?' + query : '') + location.hash) } catch (_) {}
				}
				const bootUrl = window.__NOCACHE_URL('./index.js')
				const retryUrl = bootUrl + (bootUrl.includes('?') ? '&' : '?') + 'retry=1'
				buildVersionReady.then(() => import(bootUrl))
					.catch((err) => {
						console.warn('Boot import failed, trying once more', err)
						return new Promise((resolve) => setTimeout(resolve, 1500)).then(() => import(retryUrl))
					})
					.catch((err) => window.__showBootError('Could not start the game',
						err && err.message ? err.message : String(err)))
			}

			// The debug dump's loader, defined on every host: Ctrl+Alt+Shift+D in main.js is the way to
			// a dump from the live game. A build whose upload stripped the debug module answers with
			// a rejected import, which the key reports on the console.
			window.__loadDebugDump = () => buildVersionReady.then(() => import(window.__NOCACHE_URL('./script/debug.js')))

			// The debug trigger, on the same terms script/main.js exposes window.game: a dev
			// host, or ?debug anywhere. It used to be ungated, which meant three taps in the
			// corner of the LIVE game opened a menu whose cheats and "Clear saved data" work
			// perfectly well -- they write settings directly and never touch window.game.
			// The Poki upload can drop script/debug*.js entirely, and then there is nothing
			// left to import either.
			if (isDev || params.has('debug') || window.__CHEAT_BUILD === true) {
				// The one place in the whole build that names script/debug.js. main.js also
				// wants it -- to put a saved FPS readout or collision overlay back the way it
				// was left -- but a module that ships to players must not name a file that
				// does not ship with them, so it asks through this instead and gets nothing
				// on a production build, which is the right answer there anyway.
				window.__loadDebugMenu = () => buildVersionReady.then(() => import(window.__NOCACHE_URL('./script/debug.js')))

				const openDebugMenu = () =>
					window.__loadDebugMenu()
						.then((m) => m.toggleDebugMenu())
						.catch((err) => console.error('debug menu failed:', err))

				// Alt+Q on a keyboard, the three-tap corner gesture on a touchscreen. Alt
				// because every unmodified letter is already a game shortcut; capture phase,
				// so it lands whatever else is listening.
				addEventListener('keydown', (event) => {
					if (!event.altKey || event.ctrlKey || event.metaKey || event.repeat) return
					if (event.code !== 'KeyQ') return
					event.preventDefault()
					openDebugMenu()
				}, true)

				let taps = 0
				let firstTap = 0
				addEventListener('pointerdown', (event) => {
					if (event.button !== 0) return
					let x = event.clientX, y = event.clientY
					const game = window.game
					if (document.pointerLockElement && event.pointerType === 'mouse' && game?.mouseCursor) {
						// Pointer lock freezes native coordinates; the visible star owns the click.
						const bounds = game.ui.canvas.getBoundingClientRect()
						x = bounds.left + game.mouseCursor.x * game.ui.viewport.scale
						y = bounds.top + game.mouseCursor.y * game.ui.viewport.scale
					}
					if (x < 0 || y < 0 || x > 100 || y > 100) return
					const now = performance.now()
					if (taps === 0 || now - firstTap > 2000) {
						taps = 0
						firstTap = now
					}
					if (++taps >= 3) {
						taps = 0
						openDebugMenu()
					}
				}, true)
			}
		