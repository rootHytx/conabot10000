var dir = 'D:/Downloads/PROGRAMAS/DiscordBot/conabot10000'; //define working environment

let ano1sem1=new Map();
ano1sem1.set('Álgebra Linear e Geometria Analítica','https://sigarra.up.pt/fcup/pt/ucurr_geral.ficha_uc_view?pv_ocorrencia_id=460845');
ano1sem1.set('Cálculo I','https://sigarra.up.pt/fcup/pt/ucurr_geral.ficha_uc_view?pv_ocorrencia_id=460844');
ano1sem1.set('Estruturas Discretas','https://sigarra.up.pt/fcup/pt/ucurr_geral.ficha_uc_view?pv_ocorrencia_id=460841');
ano1sem1.set('Introdução aos Computadores','https://sigarra.up.pt/fcup/pt/ucurr_geral.ficha_uc_view?pv_ocorrencia_id=460842');
ano1sem1.set('Programação Imperativa','https://sigarra.up.pt/fcup/pt/ucurr_geral.ficha_uc_view?pv_ocorrencia_id=460843');

ano1sem2 = new Map();
ano1sem2.set('Cálculo II','https://sigarra.up.pt/fcup/pt/ucurr_geral.ficha_uc_view?pv_ocorrencia_id=460851');
ano1sem2.set('Comunicação Técnica','https://sigarra.up.pt/fcup/pt/ucurr_geral.ficha_uc_view?pv_ocorrencia_id=460850');
ano1sem2.set('Estruturas de Dados','https://sigarra.up.pt/fcup/pt/ucurr_geral.ficha_uc_view?pv_ocorrencia_id=460849');
ano1sem2.set('Laboratório de Computadores','https://sigarra.up.pt/fcup/pt/ucurr_geral.ficha_uc_view?pv_ocorrencia_id=460848');
ano1sem2.set('Modelos de Computação','https://sigarra.up.pt/fcup/pt/ucurr_geral.ficha_uc_view?pv_ocorrencia_id=460846');
ano1sem2.set('Programação Funcional','https://sigarra.up.pt/fcup/pt/ucurr_geral.ficha_uc_view?pv_ocorrencia_id=460847');

let ano2sem1=new Map();
ano2sem1.set('Arquitetura de Computadores','https://sigarra.up.pt/fcup/pt/ucurr_geral.ficha_uc_view?pv_ocorrencia_id=460853');
ano2sem1.set('Desenho e Análise de Algoritmos', 'https://sigarra.up.pt/fcup/pt/ucurr_geral.ficha_uc_view?pv_ocorrencia_id=460852');
ano2sem1.set('Lógica Computacional', 'https://sigarra.up.pt/fcup/pt/ucurr_geral.ficha_uc_view?pv_ocorrencia_id=460854');
ano2sem1.set('Mecânica', 'https://sigarra.up.pt/fcup/pt/ucurr_geral.ficha_uc_view?pv_ocorrencia_id=455362');
ano2sem1.set('Probabilidades e Estatística', 'https://sigarra.up.pt/fcup/pt/ucurr_geral.ficha_uc_view?pv_ocorrencia_id=460855');
ano2sem1.set('Teoria de Grupos', 'https://sigarra.up.pt/fcup/pt/ucurr_geral.ficha_uc_view?pv_ocorrencia_id=455243');
ano2sem1.set('Teoria de Números e Aplicações', 'https://sigarra.up.pt/fcup/pt/ucurr_geral.ficha_uc_view?pv_ocorrencia_id=457328');

ano2sem2 = new Map();
ano3sem1 = new Map();
ano3sem2 = new Map();

let faculdade = [
	ano1sem1,
	ano1sem2,
	ano2sem1,
	ano2sem2,
	ano3sem1,
	ano3sem2
]

let priestsarr = [
	'https://cruxnow.com/wp-content/uploads/2019/10/12c068ae215bc03e6fe28b6a8678e7a7.jpeg',
	'https://ichef.bbci.co.uk/images/ic/640x360/p01hc8c5.jpg',
	'https://cruxnow.com/wp-content/uploads/2018/06/20180620T0829-0495-CNS-POPE-AUDIENCE-COMMANDS_800-1280x720.jpg',
	'https://www.georgetown.edu/wp-content/uploads/2012/06/cara_web.jpg',
	'https://www.catholicregister.org/media/k2/items/cache/06b838afa6933ac59c832da247bdc689_XL.jpg',
	'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iJYCEXGkQLUw/v1/1000x-1.jpg',
	'https://notesfrompoland.com/wp-content/uploads/2020/02/31740186517_ebddfbbfd9_k1.jpg',
	'https://www.rcdea.org.uk/wp-content/uploads/2019/07/OrdinationiIveBishopAlanOutside750-750x480.jpg'
];

let aggrPriests = [
	dir.concat('/aggrpriests/priest1.jpg'),
	dir.concat('/aggrpriests/priest2.jpg'),
	dir.concat('/aggrpriests/priest3.jpg'), 
	dir.concat('/aggrpriests/priest4.jpg'), 
	dir.concat('/aggrpriests/priest5.jpg'),
	'https://limo.ismcdn.jp/mwimgs/f/3/-/img_f35b71b033e443326e03d99750fb411d505410.jpg',
	'https://miro.medium.com/max/850/1*h7a9Iy3jxQWjfRVZMMFmlA.png',
	'https://hcfmea.org/wp-content/uploads/2017/01/resolutions.jpg'
];

let nojentos = [
	'https://www.abrilabril.pt/sites/default/files/styles/superjumbo/public/assets/img/8176.jpg',
	'https://zap.aeiou.pt/wp-content/uploads/2014/02/810c67f43c07386782818baef31034d0-783x450.jpg',
	'https://countrytodiscover.files.wordpress.com/2017/09/traje.jpg',
	'https://www.utad.pt/tutoria/wp-content/uploads/sites/40/2019/10/banner_praxe.jpg',
	'ominho.pt/wp-content/uploads/2020/09/praxe-2.jpg',
	'https://www.jpn.up.pt/wp-content/uploads/2016/05/praxeacademica.jpg',
	'https://www.comregras.com/wp-content/uploads/2018/10/praxe.png',
	'www.esquerda.net/sites/default/files/styles/480y/public/477460240_c24dba5d2e_0_4.jpg'
]
let hornydog = dir.concat('/hornyDOG_HD.mp4');
module.exports = { priestsarr, aggrPriests, nojentos, faculdade, hornydog };
