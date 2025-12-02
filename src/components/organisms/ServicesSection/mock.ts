import iconeArCondicionadoInstalacao from "../../../assets/icons/icone_arcondicionado_instalacao.svg";
import iconeArCondManutencao from "../../../assets/icons/icone_arcond_manutencao.svg";
import iconePlacaConcerto from "../../../assets/icons/icone_placa_concerto.svg";
import iconeBebedouroConcerto from "../../../assets/icons/icone_bebedouro_concerto.svg";
import iconeMicroondasManutencao from "../../../assets/icons/icone_microondas_manutencao.svg";
import iconeLavadouraManutencao from "../../../assets/icons/icone_lavadoura_manutencao.svg";

export const servicesData = [
    {
        id: 1,
        title: "Instalação de Ar Condicionado",
        description:
            "Minha expertise garante a instalação perfeita do seu ar condicionado. Atendimento personalizado, precisão e cuidado para o conforto que você merece.",
        icon: iconeArCondicionadoInstalacao,
    },
    {
        id: 2,
        title: "Manutenção de Ar Condicionado",
        description:
            "Ofereço manutenção profissional para manter seu ambiente sempre confortável. Cuidados especializados asseguram eficiência e desempenho duradouros.",
        icon: iconeArCondManutencao,
    },
    {
        id: 3,
        title: "Conserto de Placas Ar Condicionado",
        description:
            "Ofereço consertos precisos e confiáveis, com abordagem técnica para garantir o funcionamento adequado. Confie na minha experiência para manter seu sistema em perfeito estado.",
        icon: iconePlacaConcerto,
    },
    {
        id: 4,
        title: "Manutenção de Bebedouro",
        description:
            "Seu bebedouro precisa de reparos? Conte com meu atendimento personalizado e soluções rápidas para manter a qualidade da água que você consome.",
        icon: iconeBebedouroConcerto,
    },
    {
        id: 5,
        title: "Manutenção de Microondas",
        description:
            "Problemas com o microondas? Estou aqui para ajudar com serviços ágeis, eficazes e garantir que seu aparelho funcione perfeitamente.",
        icon: iconeMicroondasManutencao,
    },
    {
        id: 6,
        title: "Manutenção de Lavadora",
        description:
            "Manutenção especializada para sua lavadora. Garantia de eficiência e desempenho duradouro para o cuidado do seu eletrodoméstico.",
        icon: iconeLavadouraManutencao,
    },
];

export type Service = (typeof servicesData)[number];

export default servicesData;
