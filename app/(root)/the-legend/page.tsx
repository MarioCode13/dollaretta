import Image from 'next/image'

const TheLegendPage = () => {
  return (
    <div className='min-h-screen flex flex-col items-center px-6 '>
      <Image
        src='/legend/portrait.png'
        height={400}
        width={500}
        alt='portrait'
      />
      <h1 className='text-3xl font-bold text-center mb-10 font-cinzel-d mt-2'>
        Where The Legend Began
      </h1>
      <Image
        src='/legend/statue.png'
        height={300}
        width={370}
        alt='portrait'
      />

      {/* Description */}
      <p className='text-md  text-center max-w-3xl mb-12 font-cinzel'>
        Elizabeth Rose Convent is a Catholic co-ed boarding school dedicated to
        the pursuit of optimal education, discipline and general well-being for
        all of its 700 students. The land was not always a designated boarding
        school. In fact it was once the Boulegard Manor; home to the noble
        residents of the Boulegard family. It was only donated to the church
        many years after it was rebuilt due to a tenacious fire that destroyed
        the manor and sadly, took many of the lives of its residents. One of the
        few survivors of the disaster was the lone heiress: Elizabeth Boulegard.
        It was she who saw through the rebuilding of the manor and its donation
        to the Catholic church, in the hope that she might honour the lost lives
        of the Boulegards by means of creating an institution of evangelism and
        academic excellence. Or so the administrative council of ERC would have
        you think. Since the convent was established in 1890, the students have
        been told of the true horrors of the Boulegard fire by the old
        town&apos;s people who had once seen the notorious heiress for
        themselves. The legend is too enticing to ignore and too devious not to
        share. So all those who heard it have passed the story on, and from
        generation to generation the legend prospered in the minds and hearts of
        Elizabeth Rose Convent finest. This is what they were told...
      </p>
      <Image
        src='/legend/married.png'
        height={300}
        width={370}
        alt='portrait'
      />
      <p className='text-md  text-center max-w-3xl mb-12 font-cinzel'>
        In the early years of the 18th Century a young lady of nobility named
        Elizabeth was married to the Boulegard heir: Aiden Theodore Boulegard.
        Elizabeth was known for her exceptional beauty as well as her rare and
        unusual artistic hobby for making equally beautiful dolls. Several years
        passed where Elizabeth had failed to become impregnated with
        Aiden&apos;s heir, and in these years Elizabeth&apos;s hobby had caught
        the attention of many in the community. So much so that she was referred
        to as &apos;Dollaretta.&apos;
      </p>
      <Image
        src='/legend/dollmaker.png'
        height={300}
        width={370}
        alt='portrait'
      />
      <p className='text-md   text-center max-w-3xl mb-12 font-cinzel'>
        Once she eventually gave birth to a baby girl, she was forced to resign
        her hobby and devote herself to motherhood. Only months later the
        Boulegard Manor was aflame. The cause was unknown, but the fire started
        in the dead of the night. All of the unsuspecting and unprepared
        residents perished in the fire. All but one. The young mother Elizabeth
        was the only resident to be away from the manor that night, but when she
        became aware of the horrors that had taken over her home, she recklessly
        tried to enter the mansion, desperately trying to rescue her newborn
        daughter and husband. It was far too late. The fire had destroyed
        everything. Her futile rescue attempt had left her badly scarred, and
        the disaster had left her widowed, bereaved and heiress to an immaculate
        fortune.
      </p>
      <Image
        src='/legend/widow.png'
        height={300}
        width={370}
        alt='portrait'
      />
      <p className='text-md  text-center max-w-3xl mb-12 font-cinzel'>
        It was then revealed that her fate to survive had been determined solely
        by her peculiar decision to escape the manor that dark night to return
        to her doll house (a house behind the manor that she once used as a
        studio for dollmaking,) to reminisce in her past days of artistry. After
        Elizabeth initiated the rebuilding of the mansion and the common
        town&apos;s people caught glimpses of her scarred face, they began
        calling her &apos;the broken doll.&apos; Years passed on and the
        speculation grew; it had become a common &apos;household&apos; suspicion
        that the Boulegard Manor fire was started by none other than Elizabeth
        herself. The years passed on as Elizabeth lived in seclusion, but none
        in the town had forgotten the Boulegard fire, and all were weary of the
        noble lady known as Dollaretta, the broken doll. In an eerie twist, the
        corpses of pretty, little girls began being discovered by the
        town&apos;s people.
      </p>
      <Image
        src='/legend/huntress.png'
        height={300}
        width={370}
        alt='portrait'
      />
      <p className='text-md   text-center max-w-3xl mb-12 font-cinzel'>
        They suspected it was Elizabeth who was murdering their young ones out
        of hatred and spite. Elizabeth&apos;s rank of nobility shielded her from
        the common people&apos;s accusations, but the suspicion never ceased.
        Many years passed as the town lived in fear of losing their precious
        daughters to the powerful and dangerous heiress, but even after she died
        of old age, the corpses of young and beautiful girls would continue to
        be found.
      </p>

      {/* Call-to-Action */}
      <div className='text-center'>
        <a
          href='/the-legend/full-story'
          className='inline-block bg-red-600 text-white py-2 px-6 rounded-lg hover:bg-red-700 transition'
        >
          Discover More
        </a>
      </div>
    </div>
  )
}

export default TheLegendPage
