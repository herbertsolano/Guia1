var diccionario = [
    ["",""],
    ["Abuhado","Dícese de aquellas personas quienes tienen una apariencia que recuerda a la de un búho o ave similar"],
    ["Acecinar","Acto de salar las carnes y ponerlas al aire. Acción de convertir un producto cárnico en cecina."],
    ["Agigolado","Adjetivo, típico de la provincia de Segovia, que se usa para describir aquel a quien, al realizar algo con un poco de esfuerzo, siente que se ahoga y percibe una presión en el pecho."],
    ["Álveo","La madre de un accidente hidrográfico natural, normalmente un arroyo o río."],
    ["Arrebol","Es el efecto de la luz del Sol al proyectarse sobre las nubes matutinas y de la tarde, que les otorga tonalidades rojizas"],
    ["Bahorrina","Conjunto de muchas cosas asquerosas que se han echado en agua, la cual se ha tornado sucia. También significa conjunto de gente soez y ruin."],
    ["Bonhomía","Afabilidad, sencillez, bondad y honradez en el carácter."],
    ["Burdégano","Híbrido entre un caballo y una asna."],
    ["Cagaprisas","Persona que es impaciente, quien tiene prisa siempre."],
    ["Celaje","Cuando en el cielo se pueden observar nubes de distintas texturas, formando un horizonte colorido en la puesta o salida del sol."],
    ["Conflictuar","Acto de provocar un conflicto en alguien o en algo. También significa el sufrir un conflicto interno o preocupación que puede hacer que se cambie el comportamiento."],
    ["Depauperar","Debilitar, extenuar física o moralmente, ya sea uno mismo o hacia otra persona."],
    ["Desleír","Disolver algo, de contextura sólida o pastosa, en un líquido."],
    ["Deyección","Defecación de los excrementos."],
    ["Ebúrneo","Hecho de marfil o de un material que se le parece."],
    ["Entronque","Relación de parentesco entre personas quienes comparten un tronco del linaje en común."],
    ["Esmegma","Secreción de las glándulas prepuciales. Parte del semen más espesa."],
    ["Falcado","Que tiene una curvatura similar a la de una hoz."],
    ["Farmacopea","Repertorio o libro de recetas medicinales, pudiendo ser éstas tanto fármacos como fitoterapéuticas."],
    ["ful","Faso, fallido, que posee poco valor.    "],
    ["Garambaina","Adorno de mal gusto u objetos que son pamplinas. También significa gestos de mal gusto"],
    ["Garlito","Herramienta de pesca la cual consiste en una nasa en cuya parte más estrecha tiene una red con la que atrapar al pez."],
    ["Gaznápiro","Tonto, palurdo, persona quien se emboba con cualquier cosa."],
    ["Haiga","Coche de gran tamaño y ostentoso, como lo es una limusina, un todoterreno de lujo o un bus privado."],
    ["Heresiarca","Quien promueve una herejía, quien enciende la chispa en un acto contra una religión"],
    ["Hermeneuta","Persona que interpreta textos, normalmente de carácter religioso o ético, para fijar su verdadero sentido."],
    ["Histrión","Actor teatral. También referido para aquellas personas quienes se expresan con la forma característica de una persona quien está sobreactuando."],
    ["Idiotismo","Giro o expresión lingüística que no se ajusta a las reglas gramaticales.    "],
    ["Inmarcesible","Dicho de un vegetal que no puede marchitarse.    "],
    ["Isagoge","Introducción, preámbulo."],
    ["Jerapellina","Vestido viejo y andrajoso, pieza de tela que no puede dar más de sí.    "],
    ["Jerigonza","Lenguaje propio de algunos gremios, es decir, vocabulario especializado en un determinado ámbito profesional.    "],
    ["Jipiar","Gemir, hipar, gimotear. También significa cantar con voz semejante a la de un gemido.    "],
    ["Joyel","Joya pequeña.    "],
    ["Lábaro","Estandarte que era usado por los antiguos romanos. También es el nombre del monograma formado por la cruz y las dos primeras letras del nombre griego de Cristo.    "],
    ["Lobanillo","Bulto leñoso que se forma en la corteza de los árboles. También tiene su versión humana, que consiste en un bulto superficial, generalmente no doloroso, que se forma en la cabeza y otras partes del cuerpo.    "],
    ["Limerencia","Locura de amor. Estado mental involuntario en el que la atracción de un persona hacia la otra le impide pensar de forma racional.    "],
    ["Melifluo","Sonido excesivamente dulce, suave o delicado.    "],
    ["Mondo","Dicho de algo que está limpio y libre de cosas extra, añadidas o superfluas.    "],
    ["Nadir","Punto de la esfera celeste diametralmente opuesto al cenit."],
    ["Nefando","Algo que causa repugnancia u horror cuando se habla de ella. Algo que es abominable y asqueroso a partes iguales.    "],
    ["Nefelibata","Persona soñadora, quien se encuentra en la inopia y se mantiene aislada de lo duro y cruel que es este mundo.    "],
    ["Núbil","Dicho de una persona, especialmente de una mujer, quien se encuentra en edad de casarse.    "],
    ["Ñengo","Persona enclenque, flaca, desmedrada.    "],
    ["Ñomblón","Dicho de una persona muy gorda, con buenas nalgas.    "],
    ["Ñuzco","Uno de los nombres con el que se hace referencia al Diablo o príncipe de los ángeles del mal.    "],
    ["Ochavo","Sinónimo de octavo, utilizado para hacer referencia a una octava parte de algo. También se usa para indicar que algo tiene poco valor. En la antigüedad era una moneda española de cobre con peso de un octavo de onza.    "],
    ["Oleaginoso","Sinónimo de aceitoso, con textura de aceite.    "],
    ["Orate","Persona quien no está en plenas facultades psíquicas, quien ha perdido el juicio.    "],
    ["Petricor","Olor que desprende la tierra cuando ésta ha sido mojada por las gotas de la lluvia.    "],
    ["Plañir","Gemir y llorar de tal forma que los demás lo escuchan. Sollozar y clamar.    "],
    ["Patibulario","Dicho de alguien o algo que, a causa de su repugnante aspecto, produce un gran espanto y horror.    "],
    ["Patochada","Disparate, dicho de algo necio, un despropósito.    "],
    ["Picio","Dicho de alguien quien ha tenido la mala fortuna de ser excesivamente feo.    "],
    ["Quincalla","Conjunto de objetos metálicos, con poco valor. Pueden ser tijeras, imitaciones de joyas, piezas de coche estropeadas.    "],
    ["Recipiendario","Persona quien es recibida solemnemente por la institución quien la recibe.    "],
    ["Regodeo","Deleite ante el percance ajeno, acto de alegrarse por la desgracia ajena.    "],
    ["Regnícola","Habitante natural de un reino. También dicho de quien escribe de las cosas especiales de su patria, como códigos penales, hábitos nacionales, cultura en general.    "],
    ["Réprobo","Condenado a las penas eternas. También dicho de aquel quien es condenado por su heterodoxia religioso.    "],
    ["Sabrimiento","Palabra antaño utilizada como sinónima de sabor. También se utilizaba para hacer referencia a un chiste o chascarrillo.    "],
    ["Sapenco","Caracol terrestre con rayas pardas transversales común de la Europa más sureña.    "],
    ["Sempiterno","Dicho de algo que durará para siempre. Algo que tiene inicio, pero no final.    "],
    ["Serendipia","Hallazgo, que no estaba planificado, que ha resultado ser algo afortunado pese a que se estaba buscando otra cosa.    "],
    ["Trapisonda","Riña con voces o acciones. También significa agitación del mar, formada por olas pequeñitas que se cruzan en diversos sentidos.    "],
    ["Testaferro","Persona quien presta su nombre en un contrato que, en realidad, le correspondría firmar a otra persona.    "],
    ["Trémolo","Concepto musical que describe una rápida sucesión de repeticiones de una misma nota.    "],
    ["Ubérrimo","Dicho de algo que es muy fértil y abundante.    "],
    ["Ucronía","Utopía aplicada a la historia. Reconstrucción contrafáctica de un evento histórico, de una forma en la que al final no fue.    "],
    ["Uebos","Palabra, ya en desuso, que significa una necesidad o quehacer.    "],
    ["Unigénito","Persona quien es hijo o hija única.    "],
    ["Vagido","Gemido o llanto de un recién nacido.    "],
    ["Verbigracia","Sinónimo de por ejemplo.    "],
    ["Vituperio","Insulto, calumnia o infamia que provoca la acción de haber ofendido a alguien.    "],
    ["Vulpino","Palabra usada para designar a todo aquello que esté relacionado con los zorros.    "],
    ["Xerofítico","Dicho sobre aquellos vegetales que están adaptados por su estructura a los medios secos.    "],
    ["Xeroftalmia","Enfermedad de los ojos en la que hay sequedad el el globo ocular y retracción de la conjuntiva, además de opacidad de la córnea.    "],
    ["Xeromicteria","Sequedad de la mucosa nasal.    "],
    ["Zaino","Traidor, falso, poco seguro en el trato.    "],
    ["Zangolotear","Estar constantemente moviéndose de un lugar a otro sin propósito alguno.    "],
    ["Zonzo","Soso, insulso e insípido. También dicho para referirse a alguien o algo que resulta ser bastante tonto."]
]



var inputText = document.getElementById("palabra").addEventListener("keyup",function(){
    var texto = this.value;
    document.getElementById("def").innerHTML="";
    texto = texto.toUpperCase();
    var regEx = RegExp(texto,"g");
    for(var i=0;i<diccionario.length;i++){
        if(regEx.test(diccionario[i][0].toUpperCase())){
            document.getElementById("def").innerHTML=diccionario[i][1];
            break;
        }else{
            document.getElementById("def").innerHTML="";
        }
    }
});