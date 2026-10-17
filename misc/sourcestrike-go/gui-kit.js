// Paths from the user's supplied GUI kit. Unrepresented guns keep their own original icon.
export const KIT_BUY={ak:'tr/rifle_ak47',m4s:'ct/rif_m4a1',awp:'ct/rif_awp',mp9:'ct/midtier_mp9',deagle:'ct/pist_deagle',glock:'tr/pist_glock',usp:'ct/pist_usps',p2000:'ct/pist_p2000',p250:'ct/pist_p250',elite:'ct/pist_elites',fiveseven:'ct/pist_fiveseven',mac10:'tr/midtier_mac10',mp5:'ct/midtier_mp5',ump45:'ct/midtier_ump45',p90:'ct/midtier_p90',xm1014:'ct/midtier_xm1014',m249:'ct/heavy_m249',famas:'ct/rif_famas',galil:'tr/rifle_galil',aug:'ct/rif_aug',sg553:'tr/rifle_sg552',ssg08:'ct/rif_scout',scar20:'ct/rif_scar20',g3sg1:'tr/rifle_g3sg1',armor:'ct/equip_vest',flash:'ct/grenade_flash',smoke:'ct/grenade_smoke',he:'ct/grenade_he'};
export const KIT_HUD={ak:'rifle',m4s:'m4a1',awp:'sniper',usp:'usp',deagle:'deagle',elite:'elite',fiveseven:'fiveseven',mac10:'mac10',mp5:'mp5',ump45:'ump45',p90:'p90',xm1014:'xm1014',m249:'m249',famas:'famas',galil:'galil',aug:'aug',sg553:'sg552',ssg08:'scout',g3sg1:'g3sg1',knife:'knife',he:'hegrenade',flash:'flashbang',smoke:'smoke',armor:'armor'};
export function kitImage(id,full=false){
 if(full&&KIT_BUY[id])return 'assets/gui-kit/assets/theme/vgui/gfx/cs2vgui/buymenu_'+KIT_BUY[id]+'.png';
 // These four projected kit silhouettes are edge-on; retain the readable original images.
 if(['elite','he','flash','smoke'].includes(id))return null;
 if(KIT_HUD[id])return 'assets/gui-kit/assets/theme/weapon-icons/'+KIT_HUD[id]+'.svg';
 return null;
}
