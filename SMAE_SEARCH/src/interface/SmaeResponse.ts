export interface SmaeResponse {
    Alimento:              string;
    AzucarPorEquivalenteG: string;
    Calciomg:              string;
    Cantidad:              string;
    Carbohidratos:         string;
    Categoría:             Categoría;
    Colesterolmg:          string;
    EnergíaKcal:           string;
    Etanolg:               string;
    Fibra:                 string;
    Forforomg:             string;
    GrasaMonoinsaturadag:  string;
    GrasaPoliinsaturadag:  string;
    GrasaSaturadag:        string;
    Hierromg:              string;
    IC:                    string;
    IG?:                   string;
    Lípidos:               string;
    PesoBrutoG:            string;
    PesoNetoG:             string;
    Potasiomg:             string;
    Proteína:              string;
    Selenioug?:            string;
    Sodiomg?:              string;
    Unidad?:               Unidad;
    VitaminaAug:           string;
    ÁcidoAscórbicomg:      string;
    ÁcidoFólicoug:         string;
}

export enum Categoría {
    AOAAltoEnGrasa = "A.O.A Alto en grasa",
    AOABajoEnGrasa = "A.O.A Bajo en grasa",
    AOAModeradoEnGrasa = "A.O.A Moderado en grasa",
    AOAMuyBajoEnGrasa = "A.O.A Muy bajo en grasa",
    AlimentosLibresEnEnergía = "Alimentos libres en energía",
    AzúcaresConGrasa = "Azúcares con grasa",
    AzúcaresSinGrasa = "Azúcares sin grasa",
    BebidasAlcoholicas = "Bebidas alcoholicas",
    CerealesConGrasa = "Cereales con grasa",
    CerealesSinGrasa = "Cereales Sin Grasa",
    Frutas = "Frutas",
    GrasasConProteína = "Grasas con proteína",
    GrasasSinProteína = "Grasas sin proteína",
    LecheConAzúcar = "Leche con azúcar",
    LecheDescremada = "Leche descremada",
    LecheEntera = "Leche entera",
    LecheSemi = "Leche semi",
    Leguminosas = "Leguminosas",
    Verduras = "Verduras",
}

export enum Unidad {
    Barra = "barra",
    Bolsa = "bolsa",
    BolsaIndividual = "bolsa individual",
    Bolsita = "bolsita",
    BoteSport = "bote sport",
    Copa = "copa",
    Cuchara = "cuchara",
    Cucharada = "cucharada",
    Cucharadita = "cucharadita",
    Cuchrada = "cuchrada",
    Cápsula = "cápsula",
    DispDeUnSegundo = "disp.de un segundo",
    Envase = "envase",
    Filete = "filete",
    Frasco = "frasco",
    G = "g",
    Galleta = "galleta",
    Galletas = "galletas",
    Hoja = "hoja",
    Hojas = "hojas",
    Lata = "lata",
    Mitades = "mitades",
    Ml = "ml",
    Orejon = "orejon",
    Paquete = "paquete",
    Paquete50 = "paquete (50)",
    Pieza = "pieza",
    PiezaChica = "pieza chica",
    PiezaMed = "pieza med",
    PiezaMediana = "pieza mediana",
    PiezaPequeña = "pieza pequeña",
    PurpleRebanada = "rebanada   ",
    Raja = "raja",
    Rebanada = "rebanada",
    RebanadaDelgada = "rebanada delgada",
    RebanadaGruesa = "rebanada gruesa",
    Sobre = "sobre",
    Tarro = "tarro",
    TarroOLata = "tarro o lata",
    Taza = "taza",
    UnidadEnvase = "envase ",
    UnidadG = "G",
    UnidadPieza = "pieza ",
    UnidadRebanada = "rebanada ",
    Vasito = "vasito",
}
