import Divisoria from "./components/divisoria/divisoria";
import Lista from "./components/lista/lista";
import UrlBar from "./components/urlbar/urlbar";

export default function Home() {
	const links = [
		{
			label: "Portal Brasil",
			href: "https://halliburton.sharepoint.com/sites/portalla/br/default.aspx",
			description: "",
			type: "auth",
			createdAt: "12/30/23",
		},
		{
			label: "Email Pessoal",
			href: "https://outlook.office.com/mail/inbox",
			description: "",
			type: "auth",
			createdAt: "01/01/2020",
		},
		{
			old: true,
			label: "Email Sonda",
			href: "https://accesstfa.halliburton.com/owa/,DanaInfo=.aeyekesmlHqkwxvp97-66Tx-9,SSL+#path=/mail",
			description: "",
			type: "vpn",
			createdAt: "01/01/2020",
		},
		{
			label: "Identity Self Service (ISS)",
			href: "https://halliburton.saviyntcloud.com/ECMv6/request/requestHome",
			description: "Pedir acesso a email funcional",
			type: "auth",
			createdAt: "01/01/2020",
		},
		{
			label: "Telefones",
			href: "/telefones/",
			description: "",
			type: "modal",
			createdAt: "01/01/2020",
		},
		{
			label: "Sperryweb",
			href: "https://accesstfa.halliburton.com/Manuals/,DanaInfo=.asqguv32ljImz32Nwq231vDBEAAZ3ED+Ops_Manuals.htm",
			description: "Manuais de operação",
			type: "vpn",
			createdAt: "01/01/2020",
		},
		{
			label: "Sperryweb",
			href: "https://accesstfa.halliburton.com/dana/home/launch.cgi?url=sperryweb.corp.halliburton.com/PESoftTest/Download",
			description: "Tool Software Downloads",
			type: "vpn",
			createdAt: "01/01/2020",
		},
		{
			label: "Sperryweb",
			href: "https://accesstfa.halliburton.com/dana/home/launch.cgi?url=sperryweb.corp.halliburton.com/Tool_Compatibility_Charts.htm",
			description: "Compatibility Chart",
			type: "vpn",
			createdAt: "01/01/2020",
		},
		{
			label: "Docutrack",
			href: "https://accesstfa.halliburton.com/docutrack/ui/,DanaInfo=.adbvdwyuymImz32Nwq231vDBEAAZ3ED+home.aspx",
			description: "",
			type: "vpn",
			createdAt: "01/01/2020",
		},
		{
			icon: "GraduationCap",
			label: "Learning Central",
			href: "https://learningcentral.halliburton.com",
			description: "Acesso direto",
			type: "auth",
			createdAt: "01/01/2020",
		},
		{
			icon: "ShieldCheck",
			label: "Competency Central",
			href: "https://accesstfa.halliburton.com/dana/home/launch.cgi?url=competencycentral.corp.halliburton.com",
			description: "",
			type: "vpn",
			createdAt: "01/01/2020",
		},
		{
			label: "iTools",
			href: "https://accesstfa.halliburton.com/dana/home/launch.cgi?url=.ahuvsw%3A%2F%2F0jz0047p1Qu7.-V4y-.93LJMIIh.ML%2FJTM%2FUUYbJV%2FQfg",
			description: "Expense e Outros",
			type: "vpn",
			createdAt: "01/01/2020",
		},
		{
			icon: "AppWindow",
			label: "TSOrders",
			href: "https://accesstfa.halliburton.com/dana/home/launch.cgi?url=tsorders.corp.halliburton.com",
			description: "Licensas e softwares",
			type: "vpn",
			createdAt: "01/01/2020",
		},
		{
			icon: "SquareUser",
			label: "Funcionário.com",
			href: "https://accesstfa.halliburton.com/Corpore.Net/,DanaInfo=.anq3dtut7.E5+Login.aspx",
			description: "",
			type: "vpn",
			createdAt: "01/01/2020",
		},
		{
			label: "ARGO",
			href: "https://ctm.bcdtravel.com.br/bcd/default.aspx?cliente=halliburton",
			description: "Pedido de Hotel e Vôos",
			createdAt: "01/01/2020",
		},
		{
			label: "EPOD",
			href: "https://accesstfa.halliburton.com/epodcore/,DanaInfo=.adbvdwyuymImz32Nwq231vDBEAAZ3ED,SSL+home",
			description: "Preencher customer satisfaction",
			type: "vpn",
			createdAt: "01/01/2020",
		},
		{
			old: true,
			label: "Suporte Insite",
			href: "https://accesstfa.halliburton.com/SITES/sperryINSITEweb/,DanaInfo=.ahbnomg0y1xxK4uo6u6617CVzA.,SSL+default.aspx",
			description: "",
			type: "vpn",
			createdAt: "01/01/2020",
		},
		{
			label: "E-ChartBook",
			href: "https://echartbook.halliburton.com",
			description: "",
			createdAt: "01/01/2020",
		},
		{
			order: 1,
			label: "Sharepoint",
			href: "https://nam10.safelinks.protection.outlook.com/?url=https%3A%2F%2Fhalliburton.sharepoint.com%2Fsites%2Flasperry%2FBr%2FDados%2520MLWD%2FForms%2FAllItems.aspx%3Fviewpath%3D%252Fsites%252Flasperry%252FBr%252FDados%2520MLWD%252FForms%252FAllItems.aspx&data=04%7C01%7CFelipe.Marinho%40halliburton.com%7C34bb6ce346eb4f93713408d8a1e8b6e4%7Cb7be76866f974db79081a23cf09a96b5%7C0%7C0%7C637437368201078696%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C1000&sdata=YqpH2qmn4ByKLVza2n%2FIMvSdcMvj3XbQvJK25I1rbhE%3D&reserved=0",
			description: "Dados dos poços LWD/DD/SDL",
			type: "auth",
			createdAt: "01/01/2020",
		},
		{
			label: "OneView",
			href: "https://hal.enablon.com/HALOneView/go.aspx",
			description: "Cartão stop",
			type: "auth",
			createdAt: "01/01/2020",
		},
		{
			label: "SITAER",
			href: "https://sitaer-infovoo.petrobras.com.br/",
			description: "Status de Vôos",
			type: "br",
			createdAt: "01/01/2020",
		},
		{
			label: "Halliburton TV",
			href: "https://www.halliburton.tv/",
			description: "",
			type: "auth",
			createdAt: "01/01/2020",
		},
		{
			label: "GIS-SUB",
			href: "http://gissub2.petrobras.biz",
			description: "Rastreamento de Embarcações",
			type: "br",
			createdAt: "01/01/2020",
		},
		{
			label: "SITOP",
			href: "http://sitop.petrobras.biz/aplicativo/LI04-SITOP",
			description: "Situação operacional",
			type: "br",
			createdAt: "01/01/2020",
		},
		{
			label: "MFA SETUP",
			href: "http://aka.ms/mfasetup",
			description: "Configurar Authenticator",
			type: "br",
			createdAt: "01/01/2020",
		},
		{
			label: "SEQOP",
			href: "http://csdpocos.petrobras.com.br/seqop/#/",
			description: "Sequencia Operaconal",
			type: "remote",
			createdAt: "01/01/2020",
		},
		{
			label: "CHECKIN",
			href: "https://apps.powerapps.com/play/e/b7b00cae-53a9-e55b-8e73-007dd2536908/a/459c01a4-c1b4-4c6d-a2b1-5b5d75dd5294?tenantId=5b6f6241-9a57-4be4-8e50-1dfa72e79a57&hint=ff725aef-885a-451d-a0ae-9bc4f3375612&sourcetime=1697645806634&source=portal",
			description: "Somente remoto",
			type: "remote",
			createdAt: "01/01/2020",
		},
		{
			old: false,
			label: "LOGÍSTICA (PESSOAL)",
			href: "https://srq.halliburton.7itec.io/login",
			description: "Pesquisar dados da viagem",
			createdAt: "01/01/2020",
		},
		{
			label: "FOLHACERTA",
			href: "https://folhacerta.com/",
			description: "",
			type: "auth",
			createdAt: "01/01/2020",
		},
		{
			label: "SMART REQUEST",
			href: "https://srq.halliburton.7itec.io/#/auth/login",
			description: "Pedido de voucher 1001",
			type: "auth",
			createdAt: "01/01/2020",
		},
		{
			label: "Logix Data",
			href: "https://halliburton.sharepoint.com/:f:/s/LOGIXData/EttAzj13p_9OjstJoJhuTEwBdzh1jv94H689OGb02HfZJg?e=So4Xav",
			description: "",
			type: "auth",
			createdAt: "01/01/2020",
		},
		{
			label: "Instalação INSITE",
			href: "/software",
			description: "",
			type: "vpn",
			modal: true,
			createdAt: "01/01/2020",
		},
		{
			icon: "Timer",
			label: "TIMER",
			href: "http://fbmarinho.github.io/htimer",
			description: "Timer para LAS",
			createdAt: "01/01/2020",
		},
		{
			label: "RT Scanner (WIP)",
			href: "http://fbmarinho.github.io/rtscanner",
			description: "",
			createdAt: "01/01/2020",
		},
		{
			icon: "HardHat",
			label: "Aceite de EPI",
			href: "/aceite",
			description: "",
			type: "vpn",
			modal: true,
			createdAt: "01/01/2020",
		},
		{
			label: "Teams",
			href: "https://teams.microsoft.com",
			description: "",
			type: "auth",
			createdAt: "01/01/2020",
		},
		{
			icon: "Laptop2",
			label: "Remote Desktop",
			href: "https://client.wvd.microsoft.com/arm/webclient/v2/index.html",
			description: "",
			type: "auth",
			createdAt: "01/01/2020",
		},
		{
			label: "Holístico",
			href: "http://csdpocos.petrobras.com.br/holistico/#/",
			description: "",
			type: "br",
			createdAt: "01/01/2020",
		},
		{
			label: "SIRH",
			href: "https://nam10.safelinks.protection.outlook.com/?url=https%3A%2F%2Fpetroleo.lms.sapsf.com%2Flearning%2Fuser%2Fportal.do%3FselectorLocaleID%3DPortuguese%26siteID%3DPRESTADORES%26landingPage%3Dlogin&data=05%7C01%7CFelipe.Marinho%40halliburton.com%7Cf2b5415a6c82480b8dfe08dbf0d46568%7Cb7be76866f974db79081a23cf09a96b5%7C0%7C0%7C638368567297844933%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000%7C%7C%7C&sdata=0ZRB%2FwAwC%2FLGFSYrHtiAGBjwmHcNzo4xZM3Esrp1ZPY%3D&reserved=0",
			description: "",
			type: "br",
			createdAt: "01/01/2020",
		},
		{
			label: "SAP Concur",
			href: "https://nam10.safelinks.protection.outlook.com/?url=https%3A%2F%2Flauncher.myapps.microsoft.com%2Fapi%2Fsignin%2F3c5fddc9-e9d2-4f8c-a80a-71fb82100c1a%3FtenantId%3Db7be7686-6f97-4db7-9081-a23cf09a96b5&data=05%7C01%7CFelipe.Marinho%40halliburton.com%7C259105ad5f81490aa46e08dbd1b30b38%7Cb7be76866f974db79081a23cf09a96b5%7C0%7C0%7C638334339147171176%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000%7C%7C%7C&sdata=qIj8XzmVeuxi344NgK2Lib%2FjAdfOyhheYMx0hEsufRQ%3D&reserved=0",
			description: "",
			type: "auth",
			createdAt: "01/01/2020",
		},
	].filter((l) => !l.old);

	links.sort((a, b) => {
		const nameA = a.label.toUpperCase(); // ignore upper and lowercase
		const nameB = b.label.toUpperCase(); // ignore upper and lowercase
		if (nameA < nameB) {
			return -1;
		}
		if (nameA > nameB) {
			return 1;
		}

		// names must be equal
		return 0;
	});

	links.sort((a, b) => {
		const orderA = a.order ? parseInt(a.order) : 1000;
		const orderB = b.order ? parseInt(b.order) : 1000;
		//console.log(orderA, orderB);
		if (orderA < orderB) {
			return -1;
		}
		if (orderA > orderB) {
			return 1;
		}

		// names must be equal
		return 0;
	});

	return (
		<main>
			<Divisoria title="LINKS QUE PRECISAM AUTENTICAR COM EMAIL OU ID" button={{ label: "Resetar senha", href: "https://passwordreset.microsoftonline.com/" }}>
				<Lista items={links.filter((f) => f.type == "auth")} />
			</Divisoria>

			<Divisoria title="LINKS INTERNOS ACESSO VIA VPN" warning="ESTES LINKS AINDA NÃO DEVEM FUNCIONAR DENTRO DA BASE OU NA WVD (MÁQUINA VIRTUAL)." button={{ label: "Clique aqui para logar", href: "https://accesstfa.halliburton.com/mfa/" }}>
				<Lista items={links.filter((f) => f.type == "vpn")} />
				<UrlBar />
			</Divisoria>

			<Divisoria title="LINKS DE ACESSO DIRETO">
				<Lista items={links.filter((f) => f.type == undefined)} />
			</Divisoria>

			<Divisoria title="LINKS RELACIONADOS A BR (ALGUNS SÓ FUNCIONAM NA REDE BR - WMAR OU RIC)">
				<Lista items={links.filter((f) => f.type == "br")} />
			</Divisoria>

			<Divisoria title="LINKS RELACIONADOS A OPERAÇÕES REMOTAS (ALGUNS SÓ FUNCIONAM NA REDE BR)">
				<Lista items={links.filter((f) => f.type == "remote")} />
			</Divisoria>
		</main>
	);
}
