import logoSamsung from "../../../assets/icons/logo_samsung.svg";
import logoLG from "../../../assets/icons/logo_lg.svg";
import logoFujitsu from "../../../assets/icons/logo_fujitsu.svg";
import logoBrastemp from "../../../assets/icons/logo_brastemp.svg";
import logoConsul from "../../../assets/icons/logo_consul.svg";
import logoTCL from "../../../assets/icons/logo_tcl.svg";
import type { BrandCardProps } from "../../molecules/BrandCard/types";

export const brandsData: BrandCardProps[] = [
    {
        id: 1,
        name: "Samsung",
        logo: logoSamsung,
    },
    {
        id: 2,
        name: "LG",
        logo: logoLG,
    },
    {
        id: 3,
        name: "Fujitsu",
        logo: logoFujitsu,
    },
    {
        id: 4,
        name: "Brastemp",
        logo: logoBrastemp,
    },
    {
        id: 5,
        name: "Consul",
        logo: logoConsul,
    },
    {
        id: 6,
        name: "TCL",
        logo: logoTCL,
    },
];
