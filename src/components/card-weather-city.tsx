import TodaySmallBackGround from "../assets/bg-today-small.svg";
import TodayLargeBackGround from "../assets/bg-today-large.svg";

{
  /*
    
    import IconDrizzle from "/images/icon-drizzle.webp";
    import IconFog from "/images/icon-fog.webp";
    import IconOvercast from "/images/icon-overcast.webp";
    import IconPartlyCloudy from "/images/icon-sunny.webp";
    import IconRain from "/images/icon-rain.webp";
    import IconSnow from "/images/icon-snow.webp";
    import IconStorm from "/images/icon-storm.webp";
    */
}
import IconSun from "/images/icon-sunny.webp";

const CardWeatherCity = () => {
  return (
    <div
      className="relative mx-auto grid max-w-250 items-center justify-items-center"
      aria-labelledby="weather-city-title"
    >
      {/* Imagem de Fundo */}
      <picture className="col-start-1 row-start-1 w-full">
        <source media="(min-width: 650px)" srcSet={TodayLargeBackGround} />
        <img
          src={TodaySmallBackGround}
          alt="Background"
          className="block w-full object-cover"
        />
      </picture>

      {/* Conteúdo sobreposto */}
      <div className="z-1 col-start-1 row-start-1 w-full p-5 text-center text-white lg:flex lg:items-center lg:justify-between">
        <div>
          <h2 id="weather-city-title" className="m-0 text-2xl">
            Berlin, Germany
          </h2>
          <time dateTime="2025-08-5" className="opacity-80">
            Tuesday, Aug 5, 2025
          </time>
        </div>

        {/* Container do Ícone + Temperatura */}
        <div className="mt-2.5 flex items-center justify-center gap-2.5">
          <img
            src={IconSun}
            alt="Sun Icon"
            className="h-37.5 w-37.5 object-contain"
          />
          <span className="text-7xl sm:text-8xl font-bold">68º</span>
        </div>
      </div>
    </div>
  );
};

export default CardWeatherCity;
