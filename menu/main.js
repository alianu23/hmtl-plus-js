const menus = [
    {
      id: 1,
      title: 'Buttermilk pancakes',
      category: 'breakfast',
      price: '$15.99',
      img: 'item-1.jpeg',
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: 'Diner double',
      category: 'lunch',
      price: '$13.99',
      img: 'item-2.jpeg',
      desc: `Vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: 'Godzilla milkshake',
      category: 'shakes',
      price: '$6.99',
      img: 'item-3.jpeg',
      desc: `Ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: 'Country delight',
      category: 'breakfast',
      price: '$20.99',
      img: 'item-4.jpeg',
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: 'Egg attack',
      category: 'lunch',
      price: '$22.99',
      img: 'item-5.jpeg',
      desc: `Franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: 'Oreo dream',
      category: 'shakes',
      price: '$18.99',
      img: 'item-6.jpeg',
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: 'Bacon overflow',
      category: 'breakfast',
      price: '$8.99',
      img: 'item-7.jpeg',
      desc: `Carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: 'American classic',
      category: 'lunch',
      price: '$12.99',
      img: 'item-8.jpeg',
      desc: `On it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: 'Quarantine buddy',
      category: 'shakes',
      price: '$16.99',
      img: 'item-9.jpeg',
      desc: `Skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 10,
      title: 'Bison steak',
      category: 'dinner',
      price: '$22.99',
      img: 'item-10.jpeg',
      desc: `Skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];

  const menuContainer = document.getElementById("menu");
 
  for (let i = 0; i < menus.length; i++){
    menuContainer.innerHTML += `
    <div class="food1">
    <img class="picture" src=${menus[i].img} alt="photo">
    <div class="info">
        <div class="nameprice">
         <p class="title">${menus[i].title}</p>
         <p class="price">${menus[i].price}</p>
        </div> 
        <p class="desc">${menus[i].desc}</p>
    </div>  
  </div>
    `;

  }