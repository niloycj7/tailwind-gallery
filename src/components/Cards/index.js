import React from 'react';
import Photo from './../../assets/hero4.jpg';
import Photo1 from './../../assets/hero3.jpg';
import Photo2 from './../../assets/hero2.jpg';

const Cards = ({
  ...otherProps
}) => {
  return (
    <div id="gallery" className="flex flex-row flex-wrap py-14 justify-center">

      <div className="
        w-full lg:w-3/6 xl:w-4/12
        px-2.5 mb-5
      ">

        <div className="bg-white">
          <div>
            <img src={Photo} className="w-full" />
          </div>

          <div className="p-2.5">
            <ul>
              <li className="list-none">
                <span className="font-bold text-base">
                  River
              </span>
              </li>

              <li className="list-none">
                <span className="text-base">
                A river is a natural flowing watercourse, usually freshwater, flowing towards an ocean, sea, lake or another river. In some cases, a river flows into the ground and becomes dry at the end of its course without reaching another body of water. Small rivers can be referred to using names such as stream, creek, brook, rivulet, and rill. There are no official definitions for the generic term river as applied to geographic features, although in some countries or communities a stream is defined by its size. Many names for small rivers are specific to geographic location; examples are "run" in some parts of the United States, "burn" in Scotland and northeast England, and "beck" in northern England. Sometimes a river is defined as being larger than a creek, but not always: the language is vague.
              </span>
              </li>
            </ul>
          </div>
        </div>

      </div>

      <div className="
        w-full lg:w-3/6 xl:w-4/12
        px-2.5 mb-5
      ">

        <div className="bg-white">
          <div>
            <img src={Photo2} className="w-full" />
          </div>

          <div className="p-2.5">
            <ul>
              <li className="list-none">
                <span className="font-bold text-base">
                  Lake
              </span>
              </li>

              <li className="list-none">
                <span className="text-base">
                A lake is an area filled with water, localized in a basin, surrounded by land, apart from any river or other outlet that serves to feed or drain the lake. Lakes lie on land and are not part of the ocean, although like the much larger oceans, they form part of earth's water cycle. Lakes are distinct from lagoons which are generally coastal parts of the ocean. They are generally larger and deeper than ponds, which also lie on land, though there are no official or scientific definitions. Lakes can be contrasted with rivers or streams, which are usually flowing in a channel on land. Most lakes are fed and drained by rivers and streams. 
              </span>
              </li>
            </ul>
          </div>
        </div>

      </div>

      <div className="
        w-full lg:w-3/6 xl:w-4/12
        px-2.5 mb-5
      ">

        <div className="bg-white">
          <div>
            <img src={Photo1} className="w-full" />
          </div>

          <div className="p-2.5">
            <ul>
              <li className="list-none">
                <span className="font-bold text-base">
                  Hill
              </span>
              </li>

              <li className="list-none">
                <span className="text-base">
                The distinction between a hill and a mountain is unclear and largely subjective, but a hill is universally considered to be not as tall, or as steep as a mountain.
                Geographers historically regarded mountains as hills greater than 1,000 feet (304.8 meters) above sea level, which formed the basis of the plot of the 1995 film The Englishman Who Went Up a Hill But Came Down a Mountain. In contrast, hillwalkers have tended to regard mountains as peaks 2,000 feet (610 m) above sea level: the Oxford English Dictionary also suggests a limit of 2,000 feet (610 m) and Whittow states "Some authorities regard eminences above 600 m (1,969 ft) as mountains, those below being referred to as hills." Today, a mountain is usually defined in the UK and Ireland as any summit at least 2,000 feet or 610 meters high, while the official UK government's definition of a mountain is a summit of 600 meters (1,969 feet) or higher. Some definitions include a topographical prominence requirement, typically 100 feet (30.5 m) or 500 feet (152.4 m). In practice, mountains in Scotland are frequently referred to as "hills" no matter what their height, as reflected in names such as the Cuillin Hills and the Torridon Hills. In Wales, the distinction is more a term of land use and appearance and has nothing to do with height. 
              </span>
              </li>
            </ul>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Cards;
