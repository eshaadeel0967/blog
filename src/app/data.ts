export default function PostData(){
    const posts = [
    {
      _id: "1",
      title: "Jack the Ripper: The Unsolved Case of London's Infamous Killer",
      slug: { current: "jack-the-ripper" },
      mainImage: {
        url: "/images/id1.png",
      },
      publishedAt: "2024-12-29",
      author: { name: "History Enthusiast" },
      body: "Jack the Ripper terrorized London in 1888, murdering at least five women in gruesome ways. Despite numerous suspects and theories, his identity remains a mystery to this day.",
      Location: "London, England",
      Details: "Jack the Ripper is arguably the most infamous serial killer in history. Operating in the Whitechapel district, he murdered at least five women, all prostitutes, in gruesome ways.",
      Mystery: "Despite numerous suspects, his identity remains unknown. The case is significant in criminology for its early use of criminal profiling.",
      Theories: "Some believe Jack was a surgeon or someone with anatomical knowledge. Others think he was a local resident, blending easily with the community.",
    },
    {
      _id: "2",
      title: "The Zodiac Killer: A Cryptic Journey into Unsolved Crimes",
      slug: { current: "zodiac-killer" },
      mainImage: {
        url: "/images/id2.png",
      },
      publishedAt: "2024-12-28",
      author: { name: "Crime Analyst" },
      body: "Operating in Northern California during the 1960s and 1970s, the Zodiac Killer taunted authorities with cryptic letters and ciphers. Despite extensive investigations, the case remains unsolved.",
      Location: "Northern California, USA",
      Details: "The Zodiac Killer claimed responsibility for multiple murders and taunted police and media with cryptic letters, ciphers, and clues."
      ,Mystery: "Though several suspects were investigated, no one was conclusively identified as the Zodiac. A cipher he sent in 1969 was only decoded in 2020, but it offered no concrete leads.",
      Impact: "The case highlights the role of media, public panic, and the challenges of analyzing psychological profiles.",
    },
    {
      _id: "3",
      title: "The Dyatlov Pass Incident: An Unexplained Hiking Mystery",
      slug: { current: "dyatlov-pass-incident" },
      mainImage: {
        url: "/images/id3.png",
      },
      publishedAt: "2024-12-27",
      author: { name: "Mystery Explorer" },
      body: "In 1959, nine hikers died under mysterious circumstances in the Ural Mountains. Their bizarre injuries have fueled decades of theories, from avalanches to extraterrestrial encounters.",
      Location: "Ural Mountains, Soviet Union",
      Details: "Nine hikers died under mysterious circumstances. Their tent was found torn from the inside, and their bodies exhibited bizarre injuries, such as missing eyes, fractured skulls, and unexplained burns.",
      Mystery: "Speculations include avalanches, military experiments, infrasound-induced panic, and even alien encounters.",
      Relevance:"This case is a study in forensic analysis and the interpretation of circumstantial evidence."

    },
    {
      _id: "4",
      title: "The Disappearance of Madeleine McCann: A Global Mystery",
      slug: { current: "madeleine-mccann-disappearance" },
      mainImage: {
        url: "/images/id4.png",
      },
      publishedAt: "2024-12-26",
      author: { name: "Investigative Journalist" },
      body: "Madeleine McCann vanished from her family's holiday apartment in Portugal in 2007. Despite worldwide attention and efforts, her case remains unsolved.",
      Location: "Portugal",
      Details: "Madeleine, a 3-year-old British girl, disappeared from her family's holiday apartment. Despite global media coverage, she has never been found.",
      Mystery: "The case remains unsolved, with suspects ranging from opportunistic kidnappers to trafficking networks.",
      Impact: "This case emphasizes the importance of immediate investigative protocols and international collaboration."
    },
    {
      _id: "5",
      title: "The Black Dahlia: Hollywood's Most Notorious Unsolved Murder",
      slug: { current: "black-dahlia-murder" },
      mainImage: {
        url: "/images/id5.png",
      },
      publishedAt: "2024-12-25",
      author: { name: "Crime Historian" },
      body: "Elizabeth Short, nicknamed the Black Dahlia, was found brutally murdered in Los Angeles in 1947. The case remains unsolved and continues to captivate criminologists and the public.",
      Location: "Portugal",
      Details: "Madeleine, a 3-year-old British girl, disappeared from her family's holiday apartment. Despite global media coverage, she has never been found.",
      Mystery: "The case remains unsolved, with suspects ranging from opportunistic kidnappers to trafficking networks.",
      Impact: "This case emphasizes the importance of immediate investigative protocols and international collaboration."
    },
    {
      _id: "6",
      title: "The Sodder Children: A Family Mystery That Defies Explanation",
      slug: { current: "sodder-children-disappearance" },
      mainImage: {
        url: "/images/id6.png",
      },
      publishedAt: "2024-12-24",
      author: { name: "True Crime Enthusiast" },
      body: "After a fire destroyed the Sodder family home in 1945, five children went missing without a trace. The case raises questions of abduction, cover-up, and unresolved grief.",
      Location: "West Virginia, USA",
      Details: "After a fire destroyed the Sodder family home, five of the ten children were unaccounted for. There was no trace of their bodies, and witnesses claimed to have seen the children alive after the fire.",
      Mystery: "Was it an abduction or an accidental death covered up? Theories range from Mafia involvement to human trafficking.",
      Relevance: "It highlights gaps in early fire investigations and the societal handling of missing persons cases."
    },
  ];
  return posts;
}