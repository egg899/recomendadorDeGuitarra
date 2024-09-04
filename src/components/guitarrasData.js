//BASE DE DATOS DE GUITARRAS
const guitarras = [
  {
    id: 1,
    titulo: 'Yamaha FG800',
    texto:
      'Las guitarras Yamaha son conocidas por su calidad y asequibilidad. El FG800 es una opción popular para principiantes debido a su construcción sólida, facilidad de ejecución cómoda y tono rico. Es adecuado para tocar blues y otros géneros.',
    img: 'src/assets/img/YamahaFG800.png',
    alt: 'Yamaha FG800'
  },

  {
    id: 2,
    titulo: 'Fender CD-60S',
    texto:
      'Fender CD-60S es otra gran opción para principiantes. Ofrece un tono cálido y equilibrado, facilidad de ejecución y un perfil de mástil cómodo. Es lo suficientemente versátil como para manejar estilos de blues de manera efectiva.',
    img: 'src/assets/img/FenderCD-60S.png',
    alt: 'Fender CD-60S'
  },

  {
    id: 3,
    titulo: 'Epiphone DR-100',
    texto:
      'Epiphone, una subsidiaria de Gibson, ofrece la DR-100, una guitarra acústica económica con un sonido rico y completo. Es conocido por su durabilidad y facilidad de ejecución, lo que lo convierte en una opción adecuada para principiantes que exploran la música blues.',
    img: 'src/assets/img/EpiphoneDR-100.png',
    alt: 'Epiphone DR-100'
  },

  {
    id: 4,
    titulo: 'Seagull S6 Original',
    texto:
      'Aunque su precio es un poco más alto en comparación con otras opciones, vale la pena considerar el Seagull S6 Original por su excelente artesanía, tono rico y facilidad de ejecución. Ofrece un sonido único que puede complementar eficazmente los estilos de interpretación de blues.',
    img: 'src/assets/img/SeagullS6Original.png',
    alt: 'Seagull S6 Original'
  },

  {
    id: 5,
    titulo: 'Ibanez AW54OPN',
    texto:
      'Ibanez ofrece la AW54OPN, una guitarra acústica asequible con tapa de caoba maciza, que proporciona un tono cálido y resonante. Cuenta con un mástil cómodo y un diapasón suave, lo que lo hace apto para principiantes para aprender técnicas de blues.',
    img: 'src/assets/img/IbanezAW54OPN.png',
    alt: 'Ibanez AW54OPN'
  },

  {
    id: 6,
    titulo: 'Martin 000-15M',
    texto:
      'Esta guitarra presenta una tapa, fondo y aros de caoba maciza, lo que ofrece tonos cálidos y equilibrados ideales para el blues. Su tamaño de cuerpo más pequeño lo hace cómodo para tocar y la construcción de caoba proporciona una excelente resonancia y proyección.',
    img: 'src/assets/img/Martin000-15M.png',
    alt: 'Martin000-15M'
  },

  {
    id: 7,
    titulo: 'Gibson J-15',
    texto:
      "The J-15 offers a combination of solid spruce top and walnut back and sides, delivering a distinctive tone with plenty of warmth and depth. It's well-suited for fingerstyle playing common in blues music, and its Gibson craftsmanship ensures high quality.",
    img: 'src/assets/img/GibsonJ-15.png',
    alt: 'Gibson J-15'
  },

  {
    id: 8,
    titulo: 'Taylor 314ce',
    texto:
      'Las guitarras Taylor son conocidas por su facilidad de ejecución y versatilidad, y la 314ce no es la excepción. Con una tapa sólida de abeto Sitka y fondo y costados sólidos de sapeli, produce un sonido balanceado con articulación clara, lo que la hace adecuada para una variedad de estilos de toque, incluido el blues.',
    img: 'src/assets/img/Taylor314ce.png',
    alt: 'Taylor 314ce'
  },

  {
    id: 9,
    titulo: 'Breedlove Oregon Concert CE',
    texto:
      ' Esta guitarra cuenta con una tapa, fondo y costados de madera de mirto, ofreciendo un carácter tonal único que funciona bien para la música blues. La forma de cuerpo tipo concierto proporciona una experiencia de juego cómoda, y la electrónica incorporada la hace adecuada para presentaciones en vivo.',
    img: 'src/assets/img/BreedloveOregonConcertCE.png',
    alt: 'Breedlove Oregon Concert CE'
  },

  {
    id: 10,
    titulo: 'Blueridge BR-140',
    texto:
      'Las guitarras Blueridge son conocidas por ofrecer diseños e tonos inspirados en el vintage a un precio asequible. La BR-140 cuenta con una tapa sólida de abeto Sitka y fondo y costados de caoba, entregando tonos clásicos de blues con mucha calidez y carácter.',
    img: 'src/assets/img/BlueridgeBR-140E.png',
    alt: 'Blueridge BR-140'
  },

  {
    id: 11,
    titulo: 'Martin D-28',
    texto:
      ' Un clásico entre los guitarristas de blues, la Martin D-28 es conocida por su tono rico y equilibrado. Tiene un cuerpo tipo dreadnought que produce un sonido potente y resonante, ideal para el blues.',
    img: 'src/assets/img/MartinD-28.png',
    alt: 'Martin D-28'
  },

  {
    id: 12,
    titulo: 'Taylor 814ce',
    texto:
      'Taylor es conocida por su innovación en la fabricación de guitarras acústicas. El modelo 814ce ofrece un sonido impresionante y una gran comodidad de juego gracias a su diseño ergonómico y su corte en la parte superior del cuerpo para un fácil acceso a los trastes superiores.',
    img: 'src/assets/img/Taylor814ce.png',
    alt: 'Taylor 814ce'
  },

  {
    id: 13,
    titulo: 'Gibson J-45',
    texto:
      'Esta guitarra tiene una larga historia en el mundo del blues. Con su cuerpo tipo dreadnought y una combinación de maderas de alta calidad, la Gibson J-45 produce un tono cálido y lleno de carácter que es perfecto para el blues.',
    img: 'src/assets/img/GibsonJ-45.png',
    alt: 'Gibson J-45'
  },

  {
    id: 14,
    titulo: 'Collings D2H',
    texto:
      'Collings es conocida por su artesanía de alta calidad y sus guitarras meticulosamente construidas. El modelo D2H ofrece un tono potente y una excelente respuesta dinámica, lo que la convierte en una gran opción para los guitarristas de blues avanzados.',
    img: 'src/assets/mg/CollingsD2H.png',
    alt: 'Collings D2H'
  },

  {
    id: 15,
    titulo: 'Guild D-55',
    texto:
      'Esta guitarra ofrece un sonido rico y resonante que es perfecto para el blues. Con su cuerpo tipo dreadnought y su diseño clásico, la Guild D-55 es una opción popular entre los músicos que buscan un instrumento de alta calidad con un carácter distintivo.',
    img: 'src/assets/img/GuilD-55.png',
    alt: 'Guild D-55'
  },

  {
    id: 16,
    titulo: 'Taylor Big Baby Taylor',
    texto:
      'Aunque puede ser un poco más costosa que otras opciones para principiantes, la Big Baby Taylor ofrece una excelente calidad de sonido y construcción. Es fácil de tocar y tiene un tamaño más compacto, lo que la hace cómoda para principiantes.',
    img: 'src/assets/img/TaylorBigBabyTaylor.png',
    alt: 'Taylor Big Baby Taylor'
  },

  {
    id: 17,
    titulo: 'Breedlove Oregon Concert E',
    texto:
      'Breedlove es conocida por sus guitarras acústicas de alta calidad, y la Oregon Concert E no es una excepción. Con una tapa de abeto Sitka y aros y fondo de myrtlewood, ofrece un tono distintivo y equilibrado que es perfecto para la música country.',
    img: 'src/assets/img/BreedloveOregonConcertE.png',
    alt: 'Breedlove Oregon Concert E'
  },

  {
    id: 18,
    titulo: 'Blueridge BR-160',
    texto:
      'Blueridge es conocida por ofrecer guitarras acústicas inspiradas en los diseños vintage a precios asequibles. El modelo BR-160 tiene una tapa de abeto Sitka y aros y fondo de palisandro macizo, lo que le da un tono cálido y profundo ideal para el country.',
    img: 'src/assets/img/BlueridgeBR-160.png',
    alt: 'Blueridge BR-160'
  },

  {
    id: 19,
    titulo: 'Martin HD-28',
    texto:
      'La Martin HD-28 es una guitarra de primera línea utilizada por muchos músicos profesionales. Ofrece un tono rico y completo, con una excelente proyección y una respuesta dinámica excepcional. Es perfecta para los guitarristas avanzados que buscan un sonido potente y versátil para el country.',
    img: 'src/assets/img/MartinHD-280.png',
    alt: 'Martin HD-28'
  },

  {
    id: 20,
    titulo: 'Gibson SJ-200',
    texto:
      'La Gibson SJ-200 es conocida como "King of the Flat-tops" y es una de las guitarras más emblemáticas de Gibson. Tiene un sonido grande y resonante, con una respuesta en graves profunda y rica que es ideal para el country. Su calidad de construcción superior y su diseño impresionante la hacen una opción popular entre los guitarristas avanzados.',
    img: 'src/assets/img/GibsonSJ-200.png',
    alt: 'Gibson SJ-200'
  },

  {
    id: 21,
    titulo: 'Taylor 814ce DLX',
    texto:
      'La Taylor 814ce DLX es una guitarra acústica de gama alta con una calidad de construcción excepcional y un sonido impresionante. Equipada con la exclusiva electrónica Expression System 2 de Taylor, ofrece un tono claro y articulado que se adapta perfectamente al estilo de tocar country. Además, su comodidad de juego y su acabado de lujo la convierten en una opción preferida entre los músicos avanzados.',
    img: 'src/assets/img/Taylor814ceDLX.png',
    alt: 'Taylor 814ce DLX'
  },

  {
    id: 22,
    titulo: 'Santa Cruz D/PW',
    texto:
      ' Santa Cruz Guitar Company es venerada por su artesanía artesanal y su dedicación a la calidad. La Santa Cruz D/PW es una guitarra de estilo dreadnought con una tapa de abeto Sitka y aros y fondo de palisandro, que ofrece un tono cálido y resonante con una excelente claridad y articulación. Es una opción favorita entre los músicos avanzados que buscan una guitarra de alta gama para el country.',
    img: 'isrc/assets/mg/SantaCruzD-PW.png',
    alt: 'Santa Cruz D/PW'
  },

  {
    id: 23,
    titulo: 'Epiphone AJ-220S',
    texto:
      'Esta guitarra ofrece un sonido robusto y resonante gracias a su tapa de abeto seleccionado y su cuerpo de caoba. Es fácil de tocar y tiene un precio accesible, lo que la convierte en una excelente opción para principiantes que quieren explorar el jazz.',
    img: 'src/assets/img/EpiphoneAJ-220S.png',
    alt: 'Epiphone AJ-220S'
  },

  {
    id: 24,
    titulo: 'Epiphone Hummingbird Pro',
    texto:
      'La Epiphone Hummingbird Pro ofrece un estilo vintage con un sonido distintivo y rico. Con una tapa de pícea sólida y aros y fondo de caoba, esta guitarra proporciona un tono cálido y equilibrado que se adapta bien al jazz.',
    img: 'src/assets/img/EpiphoneHummingbirdPro.png',
    alt: 'Epiphone Hummingbird Pro'
  },

  {
    id: 25,
    titulo: 'Ibanez Artwood AW54CE',
    texto:
      'La Ibanez Artwood AW54CE es una guitarra acústica con cutaway que ofrece un tono cálido y rico, ideal para el jazz. Su electrónica integrada permite amplificar el sonido cuando sea necesario, y su mástil delgado y cómodo facilita el juego para guitarristas intermedios.',
    img: 'src/assets/img/IbanezArtwoodAW54CE.png',
    alt: 'Ibanez Artwood AW54CE'
  },

  {
    id: 26,
    titulo: 'Gretsch G5022CE Rancher',
    texto:
      'Esta guitarra ofrece un estilo retro con un tono distintivo y rico. Tiene una tapa de abeto macizo y aros y fondo de caoba laminada, lo que le proporciona un sonido cálido y resonante. Es una excelente opción para guitarristas intermedios que buscan una guitarra con carácter para el jazz.',
    img: 'src/assets/src/assets/img/GretschG5022CERancher.png',
    alt: 'Gretsch G5022CE Rancher'
  },

  {
    id: 27,
    titulo: 'Gretsch G9500 Jim Dandy',
    texto:
      'La Gretsch G9500 Jim Dandy es una guitarra parlor con un sonido único y distintivo. Su cuerpo compacto y su tono brillante la hacen perfecta para el jazz y otros estilos de música vintage.',
    img: 'src/assets/img/GretschG9500JimDandy.png',
    alt: 'Gretsch G9500 Jim Dandy'
  },

  {
    id: 28,
    titulo: 'Takamine GD20-NS',
    texto:
      'Takamine ofrece la GD20-NS, una guitarra con una construcción de alta calidad y un tono cálido y resonante. Su diseño dreadnought y su comodidad de juego la convierten en una excelente opción para guitarristas intermedios que buscan una guitarra versátil para el jazz.',
    img: 'src/assets/img/TakamineGD20-NS.png',
    alt: 'Takamine GD20-NS'
  },

  {
    id: 29,
    titulo: 'Washburn WD10SCE',
    texto:
      'Washburn ofrece la WD10SCE, una guitarra electroacústica con una excelente relación calidad-precio. Con una tapa de abeto sólido y aros y fondo de caoba, ofrece un tono claro y equilibrado que se adapta bien al jazz.',
    img: 'src/assets/img/WashburnWD10SCE.png',
    alt: 'Washburn WD10SCE'
  },

  {
    id: 30,
    titulo: 'Martin 000-28EC',
    texto:
      'Esta guitarra, diseñada en colaboración con Eric Clapton, ofrece un tono cálido y resonante con una excelente proyección. Tiene una construcción de alta calidad con una tapa de abeto Sitka y aros y fondo de palisandro, lo que la convierte en una opción preferida entre los guitarristas avanzados para el jazz.',
    img: 'src/assets/img/Martin000-28EC.png',
    alt: 'Martin 000-28EC'
  },

  {
    id: 31,
    titulo: 'Collings OM1',
    texto:
      'La Collings OM1 es una guitarra de alta gama con una calidad de construcción excepcional y un tono exquisito. Su respuesta dinámica y su proyección hacen que sea una opción popular entre los guitarristas avanzados que buscan la perfección en el sonido para el jazz.',
    img: 'src/assets/img/CollingsOM1.png',
    alt: 'Collings OM1'
  },

  {
    id: 32,
    titulo: 'Gibson L-5 CES',
    texto:
      'La Gibson L-5 CES es una guitarra legendaria que ha sido utilizada por muchos de los mejores guitarristas de jazz. Con su diseño elegante y su tono rico y resonante, es una opción de primera categoría para los músicos avanzados que buscan la máxima expresión en el jazz.',
    img: 'src/assets/img/GibsonL-5CES.png',
    alt: 'Gibson L-5 CES'
  },

  {
    id: 33,
    titulo: 'Santa Cruz Vintage Artist',
    texto:
      'Santa Cruz ofrece la Vintage Artist, una guitarra premium hecha a mano con materiales de la más alta calidad. Con un tono cálido y complejo y una jugabilidad excepcional, es una opción ideal para los guitarristas avanzados que buscan una guitarra de jazz de alto rendimiento.',
    img: 'src/assets/img/SantaCruzVintageArtist.png',
    alt: 'Santa Cruz Vintage Artist'
  },

  {
    id: 34,
    titulo: 'Squier Affinity Stratocaster',
    texto:
      'Una guitarra económica pero sólida fabricada por Squier (una subsidiaria de Fender). Cuerpo de aliso, mástil de arce y diapasón de laurel o palisandro. Estilo clásico de Stratocaster con tres pastillas de bobina simple para un sonido versátil.',
    img: 'src/assets/img/SquierAffinityStratocaster.png',
    alt: 'Squier Affinity Stratocaster'
  },

  {
    id: 35,
    titulo: 'Epiphone Les Paul Special II',
    texto:
      'Una Les Paul accesible diseñada por Epiphone, una marca asociada a Gibson.Cuerpo de caoba con tapa de arce, mástil de caoba y diapasón de palisandro. Dos pastillas de bobina simple Epiphone 700T para un tono grueso y rockero.',
    img: 'src/assets/img/EpiphoneLesPaulSpecialII.png',
    alt: 'Epiphone Les Paul Special II'
  },

  {
    id: 36,
    titulo: 'Yamaha Pacifica 112V',
    texto:
      'Una guitarra versátil y bien construida, ideal para principiantes.Cuerpo de aliso, mástil de arce y diapasón de palisandro. Tres pastillas de bobina simple Yamaha single-coil con una humbucker en el puente para mayor versatilidad tonal.',
    img: 'src/assets/img/YamahaPacifica112V.png',
    alt: 'Yamaha Pacifica 112V'
  },

  {
    id: 37,
    titulo: 'Ibanez GRX70QA',
    texto:
      'Una opción popular de Ibanez para principiantes con un diseño moderno. Cuerpo de tilo con tapa de álamo quilted, mástil de arce y diapasón de laurel. Tres pastillas Ibanez Infinity para un sonido brillante y potente.',
    img: 'src/assets/img/IbanezGRX70QA.png',
    alt: 'Ibanez GRX70QA'
  },

  {
    id: 38,
    titulo: 'Jackson JS Series Dinky Arch Top JS22',
    texto:
      'Una guitarra Jackson económica pero de calidad con un diseño agresivo. Cuerpo de álamo, mástil de arce y diapasón de amaranto. Dos pastillas de bobina simple Jackson High-Output para un tono potente y definido.',
    img: 'src/assets/img/JacksonJSSeriesDinkyArchTopJS22.png',
    alt: 'Jackson JS Series Dinky Arch Top JS22'
  },

  {
    id: 39,
    titulo: 'Fender Player Stratocaster',
    texto:
      'Una Stratocaster actualizada de Fender con características de alta calidad.Cuerpo de aliso o fresno, mástil de arce y diapasón de pau ferro o maple. Pastillas Player Series Alnico 5 para un sonido clásico de Stratocaster.',
    img: 'src/assets/img/FenderPlayerStratocaster.png',
    alt: 'Fender Player Stratocaster'
  },

  {
    id: 40,
    titulo: 'Gretsch G2622 Streamliner',
    texto:
      "Una guitarra semi-hollowbody con el distintivo sonido Gretsch. Cuerpo de arce laminado, mástil de nato y diapasón de laurel. Pastillas Broad'Tron para un tono cálido y resonante.",
    img: 'src/assets/img/GretschG2622Streamliner.png',
    alt: 'Gretsch G2622 Streamliner'
  },

  {
    id: 41,
    titulo: 'Ibanez Prestige RG652AHM',
    texto:
      ' Esta guitarra de alta gama ofrece un mástil súper delgado y rápido y pastillas humbucker de alta ganancia que proporcionan un sonido potente y definido. Es perfecta para técnicas avanzadas de shred y solos rápidos.',
    img: 'src/assets/img/IbanezPrestigeRG652AHM.png',
    alt: 'Ibanez Prestige RG652AHM'
  },

  {
    id: 42,
    titulo: 'PRS SE Standard 24',
    texto:
      'Una guitarra PRS de gama media con excelente calidad y versatilidad. Cuerpo de caoba, mástil de arce y diapasón de laurel. Pastillas PRS SE HFS y Vintage Bass para una variedad de tonos.',
    img: 'src/assets/img/PRSSEStandard24.png',
    alt: 'PRS SE Standard 24'
  },

  {
    id: 43,
    titulo: 'ESP LTD EC-256',
    texto:
      'Una Les Paul-style de ESP LTD con un precio asequible. Cuerpo de caoba, mástil de caoba y diapasón de jatoba. Pastillas ESP Designed LH-150 para un tono robusto y cálido.',
    img: 'src/assets/img/ESPLTDEC-256.png',
    alt: 'ESP LTD EC-256'
  },

  {
    id: 44,
    titulo: 'Gibson Les Paul Standard',
    texto:
      'La icónica Les Paul de Gibson, conocida por su calidad y sonido legendario.Cuerpo de caoba con tapa de arce, mástil de caoba y diapasón de palisandro. Pastillas Burstbucker Pro para un tono potente y lleno de sustain.',
    img: 'src/assets/img/GibsonLesPaulStandard.png',
    alt: 'Gibson Les Paul Standard'
  },

  {
    id: 45,
    titulo: 'Fender American Professional Stratocaster',
    texto:
      'Una Stratocaster de alta gama de Fender, diseñada para profesionales. Cuerpo de aliso o fresno, mástil de arce y diapasón de rosewood o maple. Pastillas V-Mod Stratocaster para un sonido vintage con una respuesta moderna.',
    img: 'src/assets/img/FenderAmericanProfessionalStratocaster.png',
    alt: 'Fender American Professional Stratocaster'
  },

  {
    id: 46,
    titulo: 'PRS Custom 24',
    texto:
      'Una guitarra PRS de lujo conocida por su artesanía excepcional y versatilidad tonal. Cuerpo de caoba con tapa de arce, mástil de caoba y diapasón de palisandro. Pastillas 85/15 para un tono detallado y expresivo.',
    img: 'src/assets/img/PRSCustom24.png',
    alt: 'PRS Custom 24'
  },

  {
    id: 47,
    titulo: 'Ibanez Prestige RG652',
    texto:
      'Una guitarra Ibanez de alta gama diseñada para rock y metal. Cuerpo de tilo, mástil de arce y diapasón de palisandro. Pastillas DiMarzio Tone Zone y Air Norton para un tono potente y articulado.',
    img: 'src/assets/img/IbanezPrestigeRG6524.png',
    alt: 'Ibanez Prestige RG652'
  },

  {
    id: 48,
    titulo: 'Gretsch G6120T Players Edition Nashville',
    texto:
      "Una guitarra Gretsch premium con un diseño elegante y características modernas. Cuerpo de arce laminado, mástil de arce y diapasón de ébano. Pastillas Filter'Tron para un tono distintivo y lleno de carácter.",
    img: 'src/assets/img/GretschG6120TPlayersEditionNashville.png',
    alt: 'Gretsch G6120T Players Edition Nashville'
  },

  {
    id: 49,
    titulo: "Squier Classic Vibe '50s Stratocaster",
    texto:
      'Cuerpo de pino, mástil de arce y diapasón de arce. Pastillas Fender Designed Alnico III para un tono vintage y suave. Perfecta para reproducir sonidos de blues clásicos.',
    img: 'src/assets/img/SquierClassicVibe50sStratocaster.png',
    alt: "Squier Classic Vibe '50s Stratocaster"
  },

  {
    id: 50,
    titulo: 'Yamaha Revstar RS320',
    texto:
      'Cuerpo de nato, mástil de arce y diapasón de palisandro. Pastillas de cerámica diseñadas por Yamaha para un tono claro y equilibrado. Estética vintage y versatilidad adecuada para el blues.',
    img: 'src/assets/img/YamahaRevstarRS320.png',
    alt: 'Yamaha Revstar RS320'
  },

  {
    id: 51,
    titulo: 'Ibanez Artcore AS53',
    texto:
      ' Guitarra semi-hollowbody con cuerpo de tilo y tapa de arce. Mástil de caoba y diapasón de jatoba. Pastillas Infinity R para un tono cálido y resonante, perfecto para blues.',
    img: 'src/assets/img/IbanezArtcoreAS53.png',
    alt: 'Ibanez Artcore AS53'
  },

  {
    id: 52,
    titulo: 'Fender Player Telecaster',
    texto:
      'Cuerpo de aliso, mástil de arce y diapasón de pau ferro o maple. Pastillas Player Series Alnico 5 para un sonido brillante y claro. La versatilidad de una Telecaster la hace adecuada para una variedad de estilos, incluido el blues.',
    img: 'src/assets/img/FenderPlayerTelecaster.png',
    alt: 'Fender Player Telecaster'
  },

  {
    id: 53,
    titulo: 'Epiphone Casino Coupe',
    texto:
      ' Guitarra semi-hollowbody icónica utilizada por muchos músicos de blues. Cuerpo completamente hueco de arce laminado. Pastillas P-90 Dogear para un tono brillante y resonante.',
    img: 'src/assets/img/EpiphoneCasinoCoupe.png',
    alt: 'Epiphone Casino Coupe'
  },

  {
    id: 54,
    titulo: "Fender Vintera '60s Stratocaster",
    texto:
      ' Cuerpo de aliso, mástil de arce y diapasón de pau ferro. Pastillas de bobina simple diseñadas para reproducir el tono vintage de los años 60. Perfecta para el blues tradicional.',
    img: 'src/assets/img/FenderVintera60sStratocaster.png',
    alt: "Fender Vintera '60s Stratocaster"
  },

  {
    id: 55,
    titulo: 'Gibson Les Paul Studio',
    texto:
      'Cuerpo de caoba con tapa de arce, mástil de caoba y diapasón de palisandro. Pastillas humbucker 490R y 498T para un tono potente y versátil. La Les Paul Studio ofrece un sonido clásico adecuado para el blues moderno.',
    img: 'src/assets/img/GibsonLesPaulStudio.png',
    alt: 'Gibson Les Paul Studio'
  },

  {
    id: 56,
    titulo: 'PRS SE Custom 22',
    texto:
      'Cuerpo de caoba con tapa de arce, mástil de arce y diapasón de palisandro. Pastillas PRS SE 85/15 para un tono detallado y expresivo. Versatilidad tonal adecuada para diferentes estilos de blues.',
    img: 'src/assets/img/PRSSECustom22.png',
    alt: 'PRS SE Custom 22'
  },

  {
    id: 57,
    titulo: 'Gretsch G5420T Electromatic Hollow Body',
    texto:
      "Guitarra hollowbody con cuerpo de arce laminado. Mástil de arce y diapasón de laurel. Pastillas Black Top Filter'Tron para un tono auténtico de Gretsch, ideal para el blues.",
    img: 'src/assets/img/GretschG5420TElectromaticHollowBody.png',
    alt: 'Gretsch G5420T Electromatic Hollow Body'
  },

  {
    id: 58,
    titulo: 'Fender American Professional Telecaster',
    texto:
      'Cuerpo de fresno, mástil de arce y diapasón de rosewood o maple. Pastillas V-Mod Telecaster para un tono articulado y versátil. La Telecaster de gama alta ofrece un sonido clásico adecuado para el blues.',
    img: 'src/assets/img/FenderAmericanProfessionalTelecaster.png',
    alt: 'Fender American Professional Telecaster'
  },

  {
    id: 59,
    titulo: 'Gibson ES-335',
    texto:
      "Guitarra semi-hollowbody icónica utilizada en una variedad de estilos blues. Cuerpo de arce laminado con bloque central sólido. Pastillas humbucker '57 Classic para un tono cálido y resonante.",
    img: 'src/assets/img/GibsonES-335.png',
    alt: 'Gibson ES-335'
  },

  {
    id: 60,
    titulo: 'PRS McCarty 594',
    texto:
      'Guitarra de alta gama con especificaciones vintage modernas. Cuerpo de caoba con tapa de arce, mástil de caoba y diapasón de palisandro. Pastillas 58/15 LT para un tono rico y expresivo, perfecto para el blues.',
    img: 'src/assets/img/PRSMcCarty594.png',
    alt: 'PRS McCarty 594'
  },

  {
    id: 61,
    titulo: "D'Angelico Premier DC",
    texto:
      "Guitarra semi-hollowbody con cuerpo de arce laminado. Mástil de arce y diapasón de laurel. Pastillas humbucker D'Angelico para un tono suave y lleno de matices.",
    img: 'src/assets/img/DAngelicoPremierDC.png',
    alt: "D'Angelico Premier DC"
  },

  {
    id: 62,
    titulo: 'Suhr Classic S',
    texto:
      'Cuerpo de aliso, mástil de arce y diapasón de palisandro. Pastillas Suhr V60LP para un tono vintage con claridad y definición. Ideal para músicos avanzados que buscan un sonido blues de alta calidad.',
    img: 'src/assets/img/SuhrClassicS.png',
    alt: 'Suhr Classic S'
  },

  {
    id: 63,
    titulo: 'Epiphone ES-339 P90 PRO',
    texto:
      'Guitarra semi-hollowbody con cuerpo de arce laminado. Mástil de caoba y diapasón de laurel. Pastillas P-90 Pro para un tono cálido y articulado, ideal para jazz de estilo clásico.',
    img: 'src/assets/img/EpiphoneES-339P90PRO.png',
    alt: 'Epiphone ES-339 P90 PRO'
  },

  {
    id: 64,
    titulo: "Squier Classic Vibe '60s Jazzmaster",
    texto:
      ' Cuerpo de aliso, mástil de arce y diapasón de laurel. Pastillas Fender Designed Alnico para un sonido suave y resonante. Estética vintage y versatilidad adecuada para explorar el jazz.',
    img: 'src/assets/img/SquierClassicVibe60sJazzmaster.png',
    alt: "Squier Classic Vibe '60s Jazzmaster"
  },

  {
    id: 65,
    titulo: 'Ibanez Artcore AF55',
    texto:
      ' Guitarra hollowbody con cuerpo de arce y tapa de arce laminado. Mástil de caoba y diapasón de laurel. Pastillas Infinity R para un tono cálido y balanceado, perfecto para jazz de estilo tradicional.',
    img: 'src/assets/img/IbanezArtcoreAF55.png',
    alt: 'Ibanez Artcore AF55'
  },
  {
    id: 66,
    titulo: 'Jackson JS Series Dinky JS11',
    texto:
      'Con su diseño ergonómico y pastillas de alto rendimiento, esta guitarra es excelente para principiantes que desean explorar el Heavy Metal. Ofrece un mástil delgado y rápido que facilita la ejecución de riffs y solos.',
    img: 'src/assets/img/JacksonJSSeriesDinkyJS11.png',
    alt: 'Jackson JS Series Dinky JS11'
  },

  {
    id: 67,
    titulo: 'Yamaha SA2200',
    texto:
      'Guitarra semi-hollowbody de alta calidad con cuerpo de arce y tapa de arce. Mástil de caoba y diapasón de ébano.Pastillas Yamaha Alnico V para un tono rico y versátil, ideal para jazz.',
    img: 'src/assets/img/YamahaSA2200.png',
    alt: 'Yamaha SA2200'
  },

  {
    id: 68,
    titulo: 'Fender Player Jazzmaster',
    texto:
      'Cuerpo de aliso, mástil de arce y diapasón de pau ferro o maple. Pastillas Player Series Alnico 2 para un tono vintage y suave. Perfecta para explorar diferentes estilos de jazz moderno.',
    img: 'src/assets/img/FenderPlayerJazzmaster.png',
    alt: 'Fender Player Jazzmaster'
  },

  {
    id: 69,
    titulo: 'Epiphone Emperor Swingster',
    texto:
      'Guitarra semi-hollowbody con cuerpo de arce laminado. Mástil de arce y diapasón de pau ferro. Pastillas SwingBucker con coil-splitting para tonos versátiles de jazz y rockabilly.',
    img: 'src/assets/img/EpiphoneEmperorSwingster.png',
    alt: 'Epiphone Emperor Swingster'
  },

  {
    id: 70,
    titulo: 'Ibanez Artcore Expressionist AS93',
    texto:
      'Guitarra hollowbody con cuerpo de arce y tapa de arce. Mástil de caoba y diapasón de ébano. Pastillas Super 58 para un tono suave y articulado, perfecto para jazz contemporáneo.',
    img: 'src/assets/img/IbanezArtcoreExpressionistAS93.png',
    alt: 'Ibanez Artcore Expressionist AS93'
  },

  {
    id: 71,
    titulo: 'Gibson ES-175',
    texto:
      "Guitarra archtop icónica utilizada en jazz y otros estilos. Cuerpo de arce laminado con bloque central sólido. Pastillas Gibson '57 Classic para un tono cálido y resonante.",
    img: 'src/assets/img/GibsonES-175.png',
    alt: 'Gibson ES-175'
  },

  {
    id: 72,
    titulo: 'PRS SE Hollowbody II',
    texto:
      'Guitarra hollowbody de alta gama con cuerpo de caoba y tapa de arce. Mástil de caoba y diapasón de ébano. Pastillas 58/15 S para un tono vintage con claridad y definición, ideal para jazz moderno.',
    img: 'src/assets/img/PRSSEHollowbodyII.png',
    alt: 'PRS SE Hollowbody II'
  },

  {
    id: 73,
    titulo: 'Heritage H-575',
    texto:
      'Guitarra archtop de calidad premium con cuerpo de arce y tapa de abeto. Mástil de arce y diapasón de ébano. Pastillas Seymour Duncan Jazz Model para un tono suave y articulado.',
    img: 'src/assets/img/HeritageH-575.png',
    alt: 'Heritage H-575'
  },

  {
    id: 74,
    titulo: "D'Angelico Excel EXL-1",
    texto:
      'Guitarra archtop elegante con cuerpo de arce y tapa de abeto.Mástil de arce y diapasón de ébano. Pastillas Floating Mini-Humbucker para un tono clásico de jazz.',
    img: 'src/assets/img/DAngelicoExcelEXL-1.png',
    alt: "D'Angelico Excel EXL-1"
  },

  {
    id: 75,
    titulo: 'PRS Private Stock Hollowbody II',
    texto:
      ' Guitarra hollowbody de edición limitada con materiales premium.Cuerpo de caoba y tapa de arce con figura. Pastillas 58/15 LT para un tono detallado y expresivo, perfecto para jazz de alto nivel.',
    img: 'src/assets/img/PRSPrivateStockHollowbodyII.png',
    alt: 'PRS Private Stock Hollowbody II'
  },

  {
    id: 76,
    titulo: 'Collings I-35 LC',
    texto:
      'Guitarra semi-hollowbody de alta gama hecha a mano. Cuerpo de arce y tapa de arce. Pastillas Lollar Imperials para un tono sofisticado y articulado.',
    img: 'src/assets/img/CollingsI-35LC.png',
    alt: 'Collings I-35 LC'
  },

  {
    id: 77,
    titulo: 'ESP LTD EC-10',
    texto:
      'Esta guitarra ofrece un cuerpo de caoba y un mástil delgado que la hace cómoda de tocar para principiantes. Sus pastillas humbucker proporcionan un sonido agresivo perfecto para el Heavy Metal.',
    img: 'src/assets/img/ESPLTDEC-10.png',
    alt: 'ESP LTD EC-10'
  },

  {
    id: 78,
    titulo: 'Schecter Omen-6',
    texto:
      'Esta guitarra ofrece un cuerpo de caoba y pastillas diseñadas específicamente para el Heavy Metal. Su mástil delgado y rápido facilita la ejecución de riffs rápidos y solos.',
    img: 'src/assets/img/SchecterOmen-6.png',
    alt: 'Schecter Omen-6'
  },

  {
    id: 79,
    titulo: 'Epiphone Les Paul Standard',
    texto:
      'Esta versión más avanzada de la Les Paul ofrece un sonido potente y sustain excelente, perfecto para el Heavy Metal. Sus pastillas humbucker proporcionan una gran versatilidad tonal.',
    img: 'src/assets/img/EpiphoneLesPaulStandard.png',
    alt: 'Epiphone Les Paul Standard'
  },

  {
    id: 80,
    titulo: 'Jackson Pro Series Soloist SL2',
    texto:
      'Con un diseño de cuerpo ligero y un mástil de arce rápido, esta guitarra es ideal para técnicas avanzadas de shredding. Sus pastillas de alta ganancia ofrecen un sonido potente y definido.',
    img: 'src/assets/img/JacksonProSeriesSoloistSL2.png',
    alt: 'Jackson Pro Series Soloist SL2'
  },
  {
    id: 81,
    titulo: 'ESP LTD MH-1000',
    texto:
      'Esta guitarra ofrece un cuerpo de caoba y un mástil de arce con un diapasón de ébano, que proporciona un tono rico y una ejecución suave. Sus pastillas EMG ofrecen un sonido agresivo ideal para el Heavy Metal.',
    img: 'src/assets/img/ESPLTDMH-10002.png',
    alt: 'ESP LTD MH-1000'
  },

  {
    id: 82,
    titulo: 'Ibanez RG550',
    texto:
      'Con un diseño icónico y un mástil súper delgado, esta guitarra es perfecta para solos rápidos y técnicas avanzadas de shred. Sus pastillas humbucker ofrecen un sonido potente y definido.',
    img: 'src/assets/img/IbanezRG550.png',
    alt: 'Ibanez RG550'
  },

  {
    id: 83,
    titulo: 'Schecter Hellraiser C-1',
    texto:
      'Esta guitarra ofrece un cuerpo de caoba con un mástil de arce y un diapasón de ébano, que proporciona un tono potente y sostenido. Sus pastillas EMG activas ofrecen un sonido agresivo perfecto para el Heavy Metal.',
    img: 'src/assets/img/SchecterHellraiserC-1.png',
    alt: 'Schecter Hellraiser C-1'
  },

  {
    id: 84,
    titulo: 'Fender Jim Root Stratocaster',
    texto:
      'Diseñada en colaboración con el guitarrista de Slipknot, esta guitarra ofrece un diseño minimalista y pastillas humbucker activas que proporcionan un sonido agresivo ideal para el Heavy Metal.',
    img: 'src/assets/img/FenderJimRootStratocaster.png',
    alt: 'Fender Jim Root Stratocaster'
  },

  {
    id: 85,
    titulo: 'ESP E-II M-II',
    texto:
      'Esta guitarra de gama alta ofrece un mástil delgado y rápido y pastillas EMG activas que proporcionan un sonido potente y definido. Es perfecta para solos rápidos y técnicas avanzadas de shred.',
    img: 'src/assets/img/ESPE-IIM-II.png',
    alt: 'ESP E-II M-II'
  },

  {
    id: 86,
    titulo: 'Jackson USA Soloist SL2H',
    texto:
      'Fabricada en los EE. UU. con los mejores materiales, esta guitarra ofrece un diseño ergonómico y un sonido potente gracias a sus pastillas de alta ganancia. Es ideal para el Heavy Metal más exigente.',
    img: 'src/assets/img/JacksonUSASoloistSL2H.png',
    alt: 'Jackson USA Soloist SL2H'
  }
] //guitarras

export default guitarras
