import { ItemAcordion } from "./ItemAcordion";

const AcordionContainer = () => {

  const data = [
    {
      icon: "/icons/light.svg",
      textInfo: "Ciudad Renovable es una empresa especializada en el diseño, construcción, operación y consultoría de proyectos de ingeniería con enfoque en energía solar, asegurando la eficiencia energética y optimizando el uso de los recursos. En Ciudad Renovable encuentras acompañamiento constante y especializado durante y después de tu proyecto de diseño, construcción o consultoría, respaldados por nuestra experiencia y equipo humano lo que nos permite brindarte la confianza para realizar tu proyecto de manera segura y eficiente",
      textTitle: "Somos especialistas en proyectos de ingeniería con enfoque en energía",
      height: "56",
      bgColor: "bg-[#00E95F]"
    },
    {
      icon: "/icons/circleCheck.svg",
      textInfo: "Gracias a las personas que confían y apuestan por una Ciudad Renovable hemos instalado más de 800 kWp en proyectos a lo largo del territorio nacional.",
      textTitle: "EPC para sistemas solares fotovoltaicos",
      height: "20",
      bgColor: "bg-[#00e95fcf]"
    },
    {
      icon: "/icons/battery.svg",
      textInfo: "Somos especialistas en el diseño de ingeniería de detalle para sistemas solares fotovoltaicos. Gracias a nuestra experiencia, conocimiento detallado y a la confianza de nuestros clientes, hemos desarrollado la ingeniería de detalle de más de 1 MWp en SSFV distribuidos a lo largo del territorio colombiano",
      textTitle: "Desarrollo de diseño e ingeniería detallada de sistemas solares fotovoltaicos e iluminación",
      bgColor: "bg-[#00e95f90]",
      height: "32"
    },
    {
      icon: "/icons/check.svg",
      textInfo: "En Ciudad Renovable realizamos ingeniería detallada para sistemas solares fotovoltaicos existentes, acompañamiento y asesoría para inspecciones RETIE y trámites necesarios para la interconexión de SSFV ante el operador de red bajo la regulación CREG 030 de 2018. Gracias a la regulación CREG 030 de 2018 muchos de nuestros clientes han logrado reducir a cero el valor de la energía eléctrica en la cuenta de servicios",
      textTitle: "Legalización de proyectos solares fotovoltaicos bajo resolución CREG 174 de 2021",
      bgColor: "bg-[#51516B]",
      height: "32"
    },
    {
      icon: "/icons/bombilla.svg",
      textInfo: "En Ciudad Renovable desarrollamos consultoría técnica y financiera en etapa de prefactibilidad o factibilidad para parques solares fotovoltaicos a gran escala a lo largo del territorio colombiano. Describiendo los detalles más relevantes para el diseño del proyecto solar, presentando alternativas técnico-financieras para el desarrollo del mismo. En la actualidad nos encontramos en el desarrollo de la ingeniería en etapa de factibilidad para una granja solar de mas de 20 MWp",
      textTitle: "Estudios de prefactibilidad, factibilidad y desarrollo de proyectos a gran escala",
      bgColor: "bg-[#51516bd4]",
      height: "32"
    },
    {
      icon: "/icons/check.svg",
      textInfo: "En Ciudad Renovable realizamos los trámites necesarios ante la UPME para la obtención de beneficios tributarios de la Ley 1715 de 2014 para SSFV en etapa de ingeniería o de puesta en marcha",
      textTitle: "Trámites de beneficios tributarios de ley 1715 de 2014",
      bgColor: "bg-[#51516b9c]",
      height: "32"
    },
    {
      icon: "/icons/circleCheck.svg",
      textInfo: "Conscientes de la importancia de los mantenimientos preventivos en SSFV para prolongar su tiempo de vida útil y mantener la eficiencia en los niveles calculados, hemos desarrollado un procedimiento riguroso acorde a la normativa internacional, para la implementación de mantenimientos de SSFV.",
      textTitle: "Mantenimiento de sistemas fotovoltaicos",
      bgColor: "bg-[#00e95fcf]",
      height: "32"
    },
  ];

  return (
    <>
      {data.map((item, index) => (
        <ItemAcordion key={index} {...item} />
      ))}
    </>
  );
};

export { AcordionContainer }