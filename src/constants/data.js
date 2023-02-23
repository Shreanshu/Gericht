import images from './images';



const starterCategory = [
  {
    category: 'Appetizers'
  },
  {
    category: 'QuickBites'
  }
];



const starterMenu = [
  {
    title: 'Jalapeño',
    category: 'Appetizers',
    price: '$12',
    tags: 'Deep-fried jalapeño peppers stuffed with cream cheese',
    specialMenu: 'false'
  },
  {
    title: 'Onion rings',
    category: 'Appetizers',
    price: '$18',
    tags: 'Beer-battered onion rings with a special sauce',
    specialMenu: 'false'
  },
  {
    title: 'Nachos',
    category: 'Appetizers',
    price: '$30',
    tags: 'Nachos slathered in cheese, refried beans, beef or chicken, black olives, tomatoes, and anything else that seems tempting to you',
    specialMenu: 'false'
  },
  {
    title: 'Chips and salsa',
    category: 'Appetizers',
    price: '$28',
    tags: 'Chips and salsa smeared in creme-cheese sauce',
    specialMenu: 'false'
  },
  {
    title: 'Fried veges',
    category: 'Appetizers',
    price: '$38',
    tags: 'Fried vegetables, like mushrooms, zucchini, or even dill pickles',
    specialMenu: 'false'
  },
  {
    title: 'Buffalo wings',
    category: 'Appetizers',
    price: '$40',
    tags: 'Buffalo wings with salad sides and tomato sauce',
    specialMenu: 'false'
  },
  {
    title: 'Fried mozzarella sticks',
    category: 'Appetizers',
    price: '$15',
    tags: 'Fried mozzarella sticks along with salad sides and roasted tomato sauce',
    specialMenu: 'false'
  },
  {
    title: 'Hamburgers',
    category: 'Appetizers',
    price: '$25',
    tags: 'The bacon cheeseburger, blue-cheese burger, or mushroom-and-Swiss burger',
    specialMenu: 'false'
  },
  {
    title: 'Sandwiches',
    category: 'Appetizers',
    price: '$20',
    tags: 'Popular ones include the Reuben, grilled cheese, grilled chicken.',
    specialMenu: 'false'
  },
  {
    title: 'Fried shrimps',
    category: 'Appetizers',
    price: '$10',
    tags: 'Hearty soups and stews are game-day favorites with bar-goers.',
    specialMenu: 'false'
  },

  {
    title: 'French Fries',
    category: 'QuickBites',
    price: '$25',
    tags: 'Includes onion rings and hand-cut chips',
    specialMenu: 'false'
  },
  {
    title: 'Chicken tenders',
    category: 'QuickBites',
    price: '$50',
    tags: 'Fried chicken tenders with side salad and mayonnaise',
    specialMenu: 'false'
  },
  {
    title: 'Pizza Margherita',
    category: 'QuickBites',
    price: '$40',
    tags: 'Pan-thin crust with a variety of toppings and sauces',
    specialMenu: 'false'
  },
  {
    title: 'Fried potatoes',
    category: 'QuickBites',
    price: '$55',
    tags: 'Four Horsemens glorious take on patatas bravas requires cooking the potatoes three times (once blanched, twice fried). We wouldnt make you go through all that if it wasnt worth it.',
    specialMenu: 'false'
  },
  {
    title: 'Cheese lamb sliders',
    category: 'QuickBites',
    price: '$75',
    tags: 'Fragrant blue cheese stands up beautifully to lamb in this must-try slider recipe. Prepare it for a festive appetizer or a light main dish. Add arugula to these burgers, if desired.',
    specialMenu: 'false'
  },
  {
    title: 'Cajun shrimp',
    category: 'QuickBites',
    price: '$35',
    tags: 'The sauce is really the star component here. Butter, onion, garlic, worcestershire sauce, cream, chicken broth, and of course cajun seasoning are the ingredients.',
    specialMenu: 'false'
  },
  {
    title: 'Crispy potato cakes',
    category: 'QuickBites',
    price: '$40',
    tags: 'This recipe for Cod Cakes is adaptable and perfectly suitable to serve as an appetizer or main course. Lemon Garlic Cod Cakes are an easy favorite enjoyed by many. The fast preparation and quick cooking method yield bite-sized fish cakes, which are a delectable treat for all.',
    specialMenu: 'false'
  },
  {
    title: 'Manchego croquettes',
    category: 'QuickBites',
    price: '$65',
    tags: 'These croquettes are super easy to make, packed with a ton of healthy spinach, and always make for a crowd favorite.',
    specialMenu: 'false'
  },
  {
    title: 'Plato de fiambres',
    category: 'QuickBites',
    price: '$70',
    tags: 'Hazlo más fácil Compra un pollo o carnes rostizados en la sección de alimentos precocinados de la tienda de comestibles que frecuentas. Así, se te hará más fácil atender a tus invitados.',
    specialMenu: 'false'
  },
  {
    title: 'Curry fries',
    category: 'QuickBites',
    price: '$20',
    tags: 'Fries tossed in a golden curry seasoning, served with a sweet-savory mango ketchup for dipping.',
    specialMenu: 'false'
  }
];



const diningCategory = [
  {
    category: 'Gerícht Küche'
  },
  {
    category: 'italian',
    description: 'Italian cuisine is a Mediterranean cuisine consisting of the ingredients, recipes and cooking techniques developed across the Italian Peninsula.'
  },
  {
    category: 'indian',
    description: 'Indian cuisine consists of a variety of regional and traditional cuisines native to India. These cuisines vary substantially and use spices, herbs, veges, fruits.'
  },
  {
    category: 'mexican',
    description: 'Mexican cuisine consists of the cooking cuisines and traditions of the modern country of Mexico. Its earliest roots lie in Mesoamerican cuisine.'
  },
  {
    category: 'greek',
    description: 'It is founded on the triad of wheat, olive oil, and wine. It uses vegetables, olive oil, grains, fish, meat, pork, poultry, beef, lamb, and goat.'
  },
  {
    category: 'spanish',
    description: 'It forms the base of many vegetable sauces (known in Spanish as sofritos). Herbs most commonly used include parsley, oregano, rosemary and thyme.'
  },
  {
    category: 'japanese',
    description: 'The traditional cuisine of Japan is based on rice with miso soup. Side dishes often consist of fish, pickled vegetables, and vegetables cooked in broth.'
  },
  {
    category: 'american',
    description: 'With wide variety of cuisines, American food culture often combines food from different countries, regions, and ethnicities to create entirely new dishes.'
  },
  {
    category: 'french',
    description: 'With its formal techniques, emphasis on fresh ingredients and simple flavors, pride in presentation, and rich and colorful history.'
  }
];



const diningMenu = [
  {
    title: 'Pizza',
    category: 'italian',
    price: '$56',
    tags: 'A round, flat, baked base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients such as various types of sausage, anchovies, mushrooms, onions, olives, vegetables, meat, ham, etc.',
    specialMenu: 'false'
  },
  {
    title: 'Baked Lasagna',
    category: 'italian',
    price: '$56',
    tags: 'Lasagna or lasagne, is a type of pasta, made of very wide, flat sheets. An Italian dish made of stacked layers of lasagna alternating with fillings such as ragù (ground meats and tomato sauce), vegetables, cheeses including ricotta, mozzarella, parmesan, and seasonings and spices.',
    specialMenu: 'false'
  },
  {
    title: 'Spaghetti Carbonara',
    category: 'italian',
    price: '$56',
    tags: 'Spaghetti and the carbonara is made with pancetta or bacon, eggs, Parmesan, a little olive oil, salt and pepper. The silky carbonara sauce is created when the beaten eggs are tossed with the hot pasta and a little fat from the pancetta or bacon.',
    specialMenu: 'false'
  },
  {
    title: 'Pesto',
    category: 'italian',
    price: '$56',
    tags: 'This vegetarian recipe includes fresh basil leaves, garlic, almonds and parmesan cheese. Lightly roasted almonds bring out the true flavor. Crushed basil leaves while adding just the right amount of oil for the perfect sauce consistency.',
    specialMenu: 'false'
  },
  {
    title: 'Ravioli, Tortellini and Agnolotti',
    category: 'italian',
    price: '$56',
    tags: 'Ravioli filling is made up of meat cooked in tomato sauce, chard and borage. Tortellini have a pork filling with raw ham and mortadella and are strictly consumed in meat broth. Agnolotti are stuffed with mixed meats and vegetables and are served seasoned with roast sauce, with butter',
    specialMenu: 'false'
  },
  {
    title: 'The Focaccia',
    category: 'italian',
    price: '$56',
    tags: 'Focaccia is a flat leavened oven-baked Italian bread, similar in style and texture to pizza. Focaccia is commonly served as a side dish or as sandwich bread and it can be round, rectangular, or square shape.',
    specialMenu: 'false'
  },
  {
    title: 'Risotto',
    category: 'italian',
    price: '$56',
    tags: 'Risotto is a northern Italian rice dish cooked with broth until it reaches a creamy consistency. The broth is commonly be derived from meat, fish, or vegetables. Many types of risotto contain butter, onion, white wine, and Parmigiano-Reggiano.',
    specialMenu: 'false'
  },
  {
    title: 'Polenta',
    category: 'italian',
    price: '$56',
    tags: 'Polenta is a dish of boiled cornmeal. The cereal used is usually yellow maize, but often buckwheat, white maize, or mixtures. It may be served as a hot porridge, or allowed to cool and solidify into a loaf that can be baked, fried, or grilled.',
    specialMenu: 'false'
  },
  {
    title: 'The Minestrone',
    category: 'italian',
    price: '$56',
    tags: 'Minestrone is a thick soup made with vegetables, often with the addition of pasta or rice, sometimes both. Common ingredients include beans, onions, celery, carrots, leaf vegetables, stock, parmesan cheese and tomatoes.',
    specialMenu: 'false'
  },
  {
    title: 'Fritto Misto',
    category: 'italian',
    price: '$56',
    tags: 'Fritto misto is an Italian dish of various foods like vegetables, seafood, and herbs fried in a very light batter. A batter made from rice flour and white wine is the secret to this fritto misto recipe.',
    specialMenu: 'false'
  },
  {
    title: 'Pizza Napoletana',
    category: 'italian',
    price: '$56',
    tags: 'A true Italian pizza is thick, tender and has an elasticity when chewed. Its traditionally dressed with fresh tomatoes, extra virgin olive oil, basil leaves and melting mozzarella or fior di latte cheese.',
    specialMenu: 'false'
  },
  {
    title: 'Tagliatelle al Ragù',
    category: 'italian',
    price: '$56',
    tags: 'The ragù is made with finely chopped or ground pieces of pork and beef mixed with celery, carrots, onions, tomato sauce and red wine. Parmigiano Reggiano cheese is grated on top, like a snow-capped peak.',
    specialMenu: 'false'
  },
  {
    title: 'Rigatoni alla Carbonara',
    category: 'italian',
    price: '$56',
    tags: 'The way they stick to the tube shaped pasta. Pecorino cheese, pork cheek and raw organic eggs are all thats needed for Romes specialty dish. Being a heavy and protein-rich meal.',
    specialMenu: 'false'
  },
  {
    title: 'Brodetto',
    category: 'italian',
    price: '$56',
    tags: 'Brodetto is a fish soup of gigantic proportions. Ray, mullet, sole, redfish and prawns gaze up from the bubbling pot, swimming in a pool alongside semi-ripe tomatoes, parsley, pepperoni and garlic.',
    specialMenu: 'false'
  },
  {
    title: 'Baccalà alla Vicentina',
    category: 'italian',
    price: '$56',
    tags: 'Dried cod is softened by beating and then placed under running water for two days. Then extra virgin olive oil, milk, Parmigiano, onions and anchovies are added and cooked slowly so that the ingredients penetrate into each other.',
    specialMenu: 'false'
  },
  {
    title: 'Caponata',
    category: 'italian',
    price: '$56',
    tags: 'Its a sweet and sour mix of different vegetables dressed in a sauce of tomato extract, onions, celery, capers and olives. Small potatoes, eggplant and bell peppers cooked with almonds, pine nuts, raisins, sugar, vinegar, extra virgin olive oil and fresh basil.',
    specialMenu: 'false'
  },

  {
    title: 'Makki Roti and Sarson Saag',
    category: 'indian',
    price: '$56',
    tags: 'The subtly flavored earthy textured Makki Roti made with corn meal tastes wonderful with tender cooked mustard green (sarson saag) that is generously flavored by cumin and cooked in butter.',
    specialMenu: 'false'
  },
  {
    title: 'Daab Chingri',
    category: 'indian',
    price: '$56',
    tags: 'King Sized Prawns infused with tender coconut juice. The prawn has to be cooked inside tender coconut till all its flavors get infused in the tender succulent meat. Soaked with pungent mustard oil, cream, mustard seeds, coconut grating, red chili, salt and turmeric foes in Daab Chingri',
    specialMenu: 'false'
  },
  {
    title: 'Pork with dried Bamboo strips',
    category: 'indian',
    price: '$56',
    tags: 'Made with tender pork pieces which are slow cooked over medium flame with an infusion of local herbs, red chili flakes and lots of freshly ground ginger. This dish is spicy without being oily and heavy and has an exotic appeal about it.',
    specialMenu: 'false'
  },
  {
    title: 'Thalipeeth',
    category: 'indian',
    price: '$56',
    tags: 'The Maharashtrian Thalipeeth is low calorie, full of fiber and beats muesli and oats in taste any day. Roasted Chana lentils, urad dal, wheat extracts, sorghum flakes, pieces of millet, rice extracts all go into making this wholesome flavoursome.',
    specialMenu: 'false'
  },
  {
    title: 'Litti Chokha',
    category: 'indian',
    price: '$56',
    tags: 'Litti is made from wheat balls which are stuffed with masala Pitthi which is a mixture of coarsely ground spices along with roasted gram flour. Chokha is made up of charcoal grilled Brinjals or roasted charred mashed potatoes.',
    specialMenu: 'false'
  },
  {
    title: 'Masor Tenga',
    category: 'indian',
    price: '$56',
    tags: 'Fresh water fish is slow cooked with baby tomatoes, long lemons (Assamese Kaji Nemu) and preserved dried mangosteen. This dish is made sans onion or garlic and has a unique spicy tangy flavor to it.',
    specialMenu: 'false'
  },
  {
    title: 'Rogan Josh',
    category: 'indian',
    price: '$56',
    tags: 'The Rogan Josh has to made with chunks of meat cut from tender lamb or a very young goat. The meat has to be slow cooked over charcoal fire and mixed with fiery red chilies and an assortment of Persian spices.',
    specialMenu: 'false'
  },
  {
    title: 'Biryani',
    category: 'indian',
    price: '$80',
    tags: 'Biryani is slow cooked over a dim fire in a covered pot while the rice, meat/ vegetables, spices are all layered on top of each other till the flavors all infuse into each other and give the dish a whole bodied flavor.',
    subTags: 'Rice with meat/ vegetables, spices are all layered on top of each other.',
    specialMenu: 'true'
  },
  {
    title: 'Malai Kofta',
    category: 'indian',
    price: '$56',
    tags: 'Made with vegetable deep fried balls cooked in a saucy delectable curry. A selection of vegetables are fried and rolled together with arrowroot to form small balls that are then cooked in a cram and tomato onion curry.',
    specialMenu: 'false'
  },
  {
    title: 'Paranthas',
    category: 'indian',
    price: '$56',
    tags: 'Parantha made with a variety of fillings like potato, cauliflower, radish, Methi, and even unusual choices like okra, Aubergines, chillies and gourd. This dish can be best described as deep fried flatbread stuffed with choice of vegetables (or meat) and savored with a dollop of cold creamy yoghurt.',
    specialMenu: 'false'
  },
  {
    title: 'Palak Paneer',
    category: 'indian',
    price: '$56',
    tags: 'The white cubes of cottage cheese sunken in the smooth creamy pureed green spinach sauce tossed and fried with garam masala, green chilies and generous amount of garlic.',
    specialMenu: 'false'
  },
  {
    title: 'Dosa',
    category: 'indian',
    price: '$26',
    tags: 'Fermented rice batter crisp fried into golden circles and combined with tangy Sambhar and creamy coconut chutney is what makes this dish such a delectable combination. Dosa can be filled with a variety of stuffings from potatoes to carrots to cauliflowers to egg and chicken.',
    subTags: 'Fermented rice batter crisp fried to golden circles and combined with tangy Sambhar.',
    specialMenu: 'true'
  },
  {
    title: 'Dhokla',
    category: 'indian',
    price: '$56',
    tags: 'Fermented rice and batter made of chickpeas are all you are going to need for making Dhokla. Sprinkle on grated coconut, salted chillies, chopped coriander on top of the dhokla and have it with tangy tamarind chutney.',
    specialMenu: 'false'
  },
  {
    title: 'Pav Bhaaji',
    category: 'indian',
    price: '$16',
    tags: 'The dish consists of bun and gravy, where gravy (Bhaji) is the superstar. Tomato puree is the main ingredient, and the dish is made spicy by adding red chili paste with a lot of crushed vegetables.',
    subTags: 'Bun and gravy of tomato puree made with a lot of crushed vegetables.',
    specialMenu: 'true'
  },
  {
    title: 'Dum Aloo',
    category: 'indian',
    price: '$56',
    tags: 'It is a gravy wherein boiled and mashed potatoes are cooked in tomato puree with a mix of spices. This dish is served with Indian bread, parathas, and much more.',
    specialMenu: 'false'
  },
  {
    title: 'Chhole Bhature',
    category: 'indian',
    price: '$40',
    tags: 'This is a combination of all-purpose flour (Maida) fried bread with Chana masala. The Chana masala gravy is spicy with a tinge of tomato and garlic along with mixed spices.',
    subTags: 'Combination of all-purpose flour (Maida) fried bread with spicy Chana masala.',
    specialMenu: 'true'
  },
  {
    title: 'Samosa',
    category: 'indian',
    price: '$10',
    tags: 'A deep fried pastry stuffed with, garlic, onions, potatoes, tamarind and so much more.',
    subTags: 'Deep fried pastry stuffed with, garlic, onions, potatoes and tamarind sauce',
    specialMenu: 'true'
  },
  {
    title: 'Pani Puri',
    category: 'indian',
    price: '$56',
    tags: 'Small, deep fried puris filled with water consisting green chillies, red chilli powder, and are stuffed with mashed potatoes, grams, onions, etc.',
    specialMenu: 'false'
  },

  {
    title: 'Chilaquiles',
    category: 'mexican',
    price: '$56',
    tags: 'Made of triangular pieces of fried or toasted corn tortilla, called totopos, soaked in a red or green hot sauce, topped with shredded chicken, chorizo, shredded beef, and scrambled or sunny side up egg.',
    subTags: 'Triangular pieces of fried or toasted corn tortilla soaked in a hot sauce.',
    specialMenu: 'true'
  },
  {
    title: 'Huevos Rancheros',
    category: 'mexican',
    price: '$56',
    tags: 'Its made with two fried corn tortillas, topped with fried beans, and two sunny side up eggs all bathed in red hot sauce and decorated with coriander and freshly ground black pepper.',
    specialMenu: 'false'
  },
  {
    title: 'Machaca (Shredded Dried Beef)',
    category: 'mexican',
    price: '$56',
    tags: 'Machaca is very versatile; you can either eat it in a taco, a stuffed burrito, flautas, or just as a stew with some tortillas, beans, or rice on the side. Machaca is simply a shredded version of dried beef with a proper seasoning.',
    specialMenu: 'false'
  },
  {
    title: 'Discada (Plow disc BBQ)',
    category: 'mexican',
    price: '$56',
    tags: 'Sausage, chorizo, ground meat, ham, bacon, lard, jalapeño pepper, onion. And it is all seasoned with thyme, celery, cumin, oregano, bay leaf, black pepper, black sauces, salt, rosemary, a bit of dark beer, etc.',
    specialMenu: 'false'
  },
  {
    title: 'Taco Mexicana',
    category: 'mexican',
    price: '$30',
    tags: 'Exotic tacos are filled with fried brains, beefs eyes, liver with onions, scorpions, bull testicles, escamoles, and a whole lot of fillings you could never imagine',
    subTags: 'Exotic tacos are filled with fried meat fritters loaded with cheese.',
    specialMenu: 'true'
  },
  {
    title: 'Mexican Burritos',
    category: 'mexican',
    price: '$36',
    tags: 'A burrito is a cylindrically rolled flour tortilla stuffed with different ingredients of choice, often a stew. The most popular are the fried bean burrito with cheese and the machaca burrito.',
    subTags: 'Cylindrically rolled flour tortilla stuffed with cheese and fried bean and other ingredients.',
    specialMenu: 'true'
  },
  {
    title: 'Pozole de Pollo o Guajolote',
    category: 'mexican',
    price: '$56',
    tags: 'Pozole is cooked with shredded chicken or wild turkey. There are several types, such as green, red, or white pozole, camagua, sea food, elopozole, etc. The most popular are the green and red.',
    specialMenu: 'false'
  },
  {
    title: 'Cochinita Pibil',
    category: 'mexican',
    price: '$56',
    tags: 'Cochinita Pibil is a slow cooked shredded pork stew, typical of the Yucatan Peninsula. The meat is marinated in achiote, orange juice, onion, and vinegar, then cooked wrapped in banana leaves. It is served with marinated onion and fresh habanero.',
    specialMenu: 'false'
  },
  {
    title: 'Tamales',
    category: 'mexican',
    price: '$56',
    tags: 'These can be wrapped in corn leaves or banana leaves and stuffed with any stew of your choice. The most common are mole, shredded chicken or pork with green or red salsa, pepper with cheese, and yellow corn kernels.',
    specialMenu: 'false'
  },
  {
    title: 'Quesadilla',
    category: 'mexican',
    price: '$40',
    tags: 'Quesadilla (Cheese-adilla) are corn flour tortilla folded in half, stuffed with cheese or other ingredients, deep fried or grilled and eaten hot.',
    subTags: 'Corn flour tortilla folded in half, stuffed with cheese and deep fried or grilled fritter.',
    specialMenu: 'true'
  },
  {
    title: 'Frijoles Puercos',
    category: 'mexican',
    price: '$56',
    tags: 'They are a mixture of beans cooked with lard, chorizo, bacon, cheese, serrano peppers and some other secret ingredients, making this a delicious dish.',
    specialMenu: 'false'
  },
  {
    title: 'Enchiladas',
    category: 'mexican',
    price: '$56',
    tags: 'This is fast food made from corn tortilla dipped in hot sauce, filled with various stews, vegetables or proteins, depending on the style. They are served with sour cream, fresh cheese, onion, and celery.',
    subTags: 'Corn tortilla filled with various stews, vegetables or proteins and sour-cream salads.',
    specialMenu: 'true'
  },
  {
    title: 'Calabacitas',
    category: 'mexican',
    price: '$56',
    tags: 'It combines sweet yellow squash, crock neck squash, zucchini and pattypan. The dish can be prepared by grilling, baking, sautéing, or steaming.',
    specialMenu: 'false'
  },
  {
    title: 'Fruit Salsa and Cinnamon Chips',
    category: 'mexican',
    price: '$56',
    tags: 'Fresh summer strawberries, kiwi, mango, apples, and any other fruit you want to add, is tossed together with a little sugar and then scooped up on baked cinnamon tortilla chips for the perfect bite.',
    specialMenu: 'false'
  },
  {
    title: 'Tamales',
    category: 'mexican',
    price: '$56',
    tags: 'Tamales are made using steamed corn dough which is then stuffed inside a corn husk. Mole (a Mexican sauce that contains chilies and a combination of ingredients) Chicken, Salsa verde, Salsa roja.',
    specialMenu: 'false'
  },
  {
    title: 'Refried Bean Salad',
    category: 'mexican',
    price: '$56',
    tags: 'This simple Mexican food has a creamy and soft texture with an earthy bean flavor that can be tweaked by adding other ingredients. For a family meal, its often served as a side dish combined with other Hispanic meals.',
    specialMenu: 'false'
  },

  {
    title: 'Moussaka',
    category: 'greek',
    price: '$56',
    tags: 'Moussaka is a creamy delicious dish made of spiced meat (beef or lamb) cooked in tomato sauce and then layered with fried eggplant and bechamel sauce. This is one of the ultimate traditional Greek dishes.',
    specialMenu: 'false'
  },
  {
    title: 'Papoutsakia (Stuffed Eggplants)',
    category: 'greek',
    price: '$56',
    tags: 'Papoutsakia is stuffed eggplants that are first baked until soft and then filled with a tomato-based meat sauce, topped with bechamel sauce and cheese, and baked till they get a beautiful golden color.',
    specialMenu: 'false'
  },
  {
    title: 'Pastitsio (Greek lasagna)',
    category: 'greek',
    price: '$56',
    tags: 'Greek dish that consists of baked layers of pasta, juicy minced beef, bechamel and tomato sauce, topped melted cheese. The minced beef is cooked in a tomato sauce along with some spices.',
    specialMenu: 'false'
  },
  {
    title: 'Soutzoukakia',
    category: 'greek',
    price: '$56',
    tags: 'Soutzoukakia are sausages made from a mixture of ground pork and beef, cumin, and olive oil which are cooked in a red wine sauce. These Greek meatballs are served with rice on the side. Soutzoukakia are very filling and are perfect on cold winter days.',
    specialMenu: 'false'
  },
  {
    title: 'Stifado (Greek Beef Stew)',
    category: 'greek',
    price: '$56',
    tags: 'Stifado is a traditional Greek beef-stew cooked with tomatoes, onions, cinnamon, vinegar or red wine, and a variety of spices and herbs. Traditionally, this Greek dish is either served with rice, chip potatoes, hilopittes (egg pasta), or orzo/kritharaki pasta.',
    specialMenu: 'false'
  },
  {
    title: 'Tomatokeftedes (Tomato Fritters)',
    category: 'greek',
    price: '$56',
    tags: 'Made with diced tomatoes, onions, mint, and feta cheese, these small bites of heaven provide a unique combination of flavors. Due to the volcanic nature of the islands soil, the local tomatoes have an amazing texture, which make for the best tomato fritters!',
    specialMenu: 'false'
  },
  {
    title: 'Tzatziki ',
    category: 'greek',
    price: '$56',
    tags: 'Tzatziki is a classic Greek dip/appetizer made of strained yogurt, garlic, cucumber, olive oil, fresh dill, and sometimes lemon juice. It is a simple and easy appetizer to prepare and it goes perfectly with almost every dish!',
    specialMenu: 'false'
  },
  {
    title: 'Courgette Balls',
    category: 'greek',
    price: '$56',
    tags: 'The starter consists of zucchini, fresh mint, feta cheese, and extra virgin olive oil. These zucchini balls are nicely served with some tzatziki or a plain yogurt dip.',
    specialMenu: 'false'
  },
  {
    title: 'Beef Stew with Orzo Pasta',
    category: 'greek',
    price: '$56',
    tags: 'The Greek Giouvetsi is made with orzo pasta, onions, red wine, delicious tomato sauce, and beef. It makes for a perfect Sunday family dish!',
    specialMenu: 'false'
  },
  {
    title: 'Greek Salad',
    category: 'greek',
    price: '$56',
    tags: 'This Greek salad is made with cucumber, olives, tomatoes, and a big piece of feta cheese. The dressing is left for each persons preference, which is why we serve olive oil, salt, vinegar, and pepper with the salad.',
    specialMenu: 'false'
  },
  {
    title: 'Kleftiko',
    category: 'greek',
    price: '$56',
    tags: 'This traditional Greek dish is slow oven cooked lamb infused with olive oil, lemon juice, and garlic. The recipe was originally called for an earthen oven to trap smoke and heat. The word Kleftiko is said to have originated from the Klephts',
    specialMenu: 'false'
  },
  {
    title: 'Gemista (Stuffed Veggies with Rice)',
    category: 'greek',
    price: '$56',
    tags: 'Gemista is a traditional home cooked meal that includes tomatoes stuffed with rice, various herbs, and minced meat (meat can be excluded). You can experiment with different types of herbs and spices and you can use different types of vegetables, such as potatoes or green peppers, instead of tomatoes.',
    specialMenu: 'false'
  },
  {
    title: 'Fasolada (Greek Bean Soup)',
    category: 'greek',
    price: '$56',
    tags: 'The recipe consists of beans, crushed tomatoes, carrots, celery, and onion. Its often flavored with bay leaves, parsley, and thyme.',
    specialMenu: 'false'
  },
  {
    title: 'Bougatsa',
    category: 'greek',
    price: '$56',
    tags: 'Bougatsa is a Greek breakfast dessert made with either semolina custard or cheese and wrapped in layers of crispy phyllo, a thin dough used in pastries. You can also garnish it with cinnamon and powdered sugar to give it an even more scrumptious flavor.',
    specialMenu: 'false'
  },
  {
    title: 'Tiropita (Greek Cheese Pie)',
    category: 'greek',
    price: '$56',
    tags: 'The main ingredient you will need to make these phyllo dough triangles are various types of cheese (mostly feta). To prepare, simply crumble the feta cheese and mix it with two otherkinds of yellow cheese for added flavor. ',
    specialMenu: 'false'
  },
  {
    title: 'Spanakopita (Greek Spinach Pie)',
    category: 'greek',
    price: '$56',
    tags: 'Crumbled feta cheese mixed with spinach. The mixture is then wrapped in phyllo pastry, brushed with olive oil or melted butter and baked until crispy and golden.  In the spinach-feta filling you can use dill, onions, and eggs (the eggs hold the mixture together).',
    specialMenu: 'false'
  },

  {
    title: 'Tortilla: Potato Omelet',
    category: 'spanish',
    price: '$56',
    tags: 'Tortilla de Patatas also called Tortilla Española in Spain is a Spanish potato and onion frittata and a traditional tapa from Spain. Made with 3 simple ingredients potatoes, onions, and eggs, its vegetarian and gluten-free.',
    specialMenu: 'false'
  },
  {
    title: 'Paella and Fideuà',
    category: 'spanish',
    price: '$56',
    tags: 'Paella is a rice dish that can be made with fish and seafood, vegetables, meat, or a mixture of these. A plate of black rice similar to paella and equally delicious.',
    specialMenu: 'false'
  },
  {
    title: 'Gazpacho and Salmorejo',
    category: 'spanish',
    price: '$56',
    tags: 'Gazpacho is a soup made of tomato, cucumber, olive oil, pepper, and garlic. It originates from Andalusia, and is very refreshing dish, perfect for the hot days of summer. Its usually accompanied by hard-boiled egg and ham.',
    specialMenu: 'false'
  },
  {
    title: 'Madrid-style Stew',
    category: 'spanish',
    price: '$56',
    tags: 'Madrid-style stew is a filling dish with a working-class and agricultural origin. Its a very nutritious chickpea stew that includes green beans, chicken, bacon, chorizo, cabbage, and beef.',
    specialMenu: 'false'
  },
  {
    title: 'Asturian Bean Stew',
    category: 'spanish',
    price: '$56',
    tags: 'Its one of the most internationally known Spanish dishes and made with beans, chorizo, bacon, pigs ear, and blood sausage. Like the Madrid-style stew, you should try it when visiting Asturias, and you will be equally satisfied.',
    specialMenu: 'false'
  },
  {
    title: 'Marmitako',
    category: 'spanish',
    price: '$56',
    tags: 'This recipe was traditionally prepared in summer because that was when fishermen and sailors fished for tuna. Its name means from the casserole in Basque, and its a stew with oil, garlic cloves, onion, tomatoes, salt, potatoes, and chorizo pepper.',
    specialMenu: 'false'
  },
  {
    title: 'Cod Pil and Vizcaya-style Cod',
    category: 'spanish',
    price: '$56',
    tags: 'Cod pil is a noteworthy dish presented in a clay pot with chopped cod, oil, chilies, and garlic.',
    specialMenu: 'false'
  },
  {
    title: 'Riojana-style Potatoes',
    category: 'spanish',
    price: '$56',
    tags: 'Riojana-style potatoes is one of the most popular dishes in the region. It consists of a stew made with potatoes accompanied by chorizo and paprika.',
    specialMenu: 'false'
  },
  {
    title: 'Vegetable Stew',
    category: 'spanish',
    price: '$56',
    tags: 'One of the star dishes of Navarra is the vegetable stew, made with artichokes, broad beans, peas, and Navarrese asparagus. Its not surprising that vegetables are a primary component of their cuisine since the local ingredients are of very high quality.',
    specialMenu: 'false'
  },
  {
    title: 'Manchegan Pisto',
    category: 'spanish',
    price: '$56',
    tags: 'Manchegan pisto is originally from Castilla-La Mancha. This recipe is made with tomatoes and peppers, a traditional harvest there.',
    specialMenu: 'false'
  },
  {
    title: 'Roasted Suckling Pig',
    category: 'spanish',
    price: '$56',
    tags: 'Roasted suckling pig is a traditional Castilian delicacy. The ingredients included in roasted suckling pig can vary depending on where you eat it. For example, in Burgos and Segovia, roast lamb is typical.',
    specialMenu: 'false'
  },
  {
    title: 'Galician Octopus',
    category: 'spanish',
    price: '$56',
    tags: 'Galician octopus, or polbo à feira, in Galician, is the best-known dish in Galicia. Commonly, you see it served as a tapas, in the form of pieces of cooked octopus seasoned with paprika.',
    specialMenu: 'false'
  },
  {
    title: 'Croquettes',
    category: 'spanish',
    price: '$56',
    tags: 'The croquettes are a fried dish made with béchamel sauce, battered with egg and breadcrumbs. They can be made with many other ingredients, some of the most common being ham and cod.',
    specialMenu: 'false'
  },
  {
    title: 'Callos Madrileños',
    category: 'spanish',
    price: '$56',
    tags: 'Callos is a dish made with tripe—usually from lamb or cow—and stewed with chorizo, accompanied by blood sausage and ham. Some restaurants also include chickpeas.',
    specialMenu: 'false'
  },
  {
    title: 'Escalivada',
    category: 'spanish',
    price: '$56',
    tags: 'The escalivada is a jewel of Catalan cuisine and is a mixture of roasted vegetables, onion, tomato, pepper, and aubergine. It is made with high-quality extra virgin olive oil.',
    specialMenu: 'false'
  },
  {
    title: 'Catalan Cream',
    category: 'spanish',
    price: '$56',
    tags: 'Its a very popular dessert within the autonomous community and is similar to custard. Its made with a soft cream cooked with a base of egg yolks and then covered with a layer of caramelized sugar.',
    specialMenu: 'false'
  },

  {
    title: 'Sushi',
    category: 'japanese',
    price: '$56',
    tags: 'Japanese sushi has its roots in the street food culture of medieval Tokyo, with pieces of nigiri (a rectangular bed of vinegar-seasoned rice topped with a slice of raw fish) served up from stalls and eaten by hand.',
    specialMenu: 'false'
  },
  {
    title: 'Okonomiyaki',
    category: 'japanese',
    price: '$56',
    tags: 'Okonomiyaki is made from an egg-and-flour batter mixed with cabbage and fried. These can include pork belly, kimchi, various vegetables, and usually a topping of dried bonito fish flakes, mayonnaise, and special okonomiyaki sauce.',
    specialMenu: 'false'
  },
  {
    title: 'Miso Soup',
    category: 'japanese',
    price: '$56',
    tags: 'Miso soup is made from dashi stock and miso: a salty-tasting paste made from fermented soybeans and rice koji.',
    specialMenu: 'false'
  },
  {
    title: 'Takoyaki',
    category: 'japanese',
    price: '$56',
    tags: 'These octopus-filled wheat batter balls hail from Osaka. The distinctive takoyaki ball shape is achieved by using a specialized pan with half-sphere indents across its surface.',
    specialMenu: 'false'
  },
  {
    title: 'Sukiyaki',
    category: 'japanese',
    price: '$56',
    tags: 'This Japanese hot pot dish with raw beef, noodles, and vegetables cooked at your table in a shallow iron pot of boiling broth made from soy sauce, sugar, and a type of rice wine for cooking called mirin.',
    specialMenu: 'false'
  },
  {
    title: 'Unagi',
    category: 'japanese',
    price: '$56',
    tags: ' Japans insatiable appetite for this delicious fish, traditionally eaten grilled and coated with sweet and salty tare sauce.',
    specialMenu: 'false'
  },
  {
    title: 'Wagashi',
    category: 'japanese',
    price: '$56',
    tags: 'Mochi rice cakes (a sticky dough made from steamed and crushed rice) that were filled with nuts, these sweets evolved into ornate delicacies',
    specialMenu: 'false'
  },
  {
    title: 'Natto',
    category: 'japanese',
    price: '$56',
    tags: 'Natto is a popular breakfast food. Its also incredibly healthy due to the effect the bacteria has on the boiled soybeans, said to benefit heart health, digestive health, and bone strength.',
    specialMenu: 'false'
  },
  {
    title: 'Oden',
    category: 'japanese',
    price: '$56',
    tags: 'A stewed tofu dish with other ingredients added to the bone-warming oden broth, such as fish cakes, potatoes, boiled eggs, daikon radish, and other assorted vegetables.',
    specialMenu: 'false'
  },
  {
    title: 'Shabu Shabu',
    category: 'japanese',
    price: '$56',
    tags: 'Hot pot dishes in which you cook thinly-cut beef strips alongside vegetables. There are a few key differences though. Shabu shabu is cooked in a deeper pot with a milder and more savory broth.',
    specialMenu: 'false'
  },
  {
    title: 'Tempura',
    category: 'japanese',
    price: '$56',
    tags: 'Tempura consists of pieces of fish and vegetables coated in a light egg and flour batter, and then deep-fried.',
    specialMenu: 'false'
  },
  {
    title: 'Ramen',
    category: 'japanese',
    price: '$56',
    tags: 'The premise for ramen is deceptively simple: soup stock, flavorings, seasonings, wheat noodles, and toppings (usually fatty pork and vegetables such as bamboo shoots).',
    specialMenu: 'false'
  },
  {
    title: 'Shojin Ryori',
    category: 'japanese',
    price: '$56',
    tags: 'Buddhist cuisine feast called shojin ryori with subtle flavors, the meal features fresh mountain vegetables and nutty-tasting goma (sesame) tofu, among other dishes. Rice, soup, pickled vegetables, tofu, and a variety of sides form a well-balanced shojin ryori feast.',
    specialMenu: 'false'
  },
  {
    title: 'Wagyu',
    category: 'japanese',
    price: '$56',
    tags: 'Beautiful marbling of fat, and rich flavor. It can be cooked as a slab of steak, thinly sliced and swish-swished through hot shabu-shabu broth, or boiled in a sukiyaki hotpot and coated in a sauce of raw egg.',
    specialMenu: 'false'
  },
  {
    title: 'Okonomiyaki',
    category: 'japanese',
    price: '$56',
    tags: 'The soul food of Osaka, okonomiyaki is made from flour with ingredients such as cabbage, meat and seafood added in and fried on a teppan hot plate. Then topped with a rich sauce and mayonnaise, its great to eat it fresh off the grill!',
    specialMenu: 'false'
  },
  {
    title: 'Curry Rice',
    category: 'japanese',
    price: '$56',
    tags: 'The basic version of Japanese curry rice is the Japanese curry, potatoes, onions, carrots, meat, and this curry sauce is served with rice.',
    specialMenu: 'false'
  },

  {
    title: 'Cheeseburgers',
    category: 'american',
    price: '$56',
    tags: 'A cheeseburger is a hamburger topped with cheese. Traditionally, the slice of cheese is placed on top of the meat patty. The cheese is usually added to the cooking hamburger patty shortly before serving, which allows the cheese to melt.',
    specialMenu: 'false'
  },
  {
    title: 'French Fries',
    category: 'american',
    price: '$56',
    tags: 'French fries finger chips, or simply fries, are batonnet or allumette-cut deep-fried potatoes. They are prepared by cutting potatoes into even strips, drying them, and frying them, usually in a deep fryer.',
    specialMenu: 'false'
  },
  {
    title: 'Hot Dogs',
    category: 'american',
    price: '$56',
    tags: 'A hot dog is a food consisting of a grilled or steamed sausage served in the slit of a partially sliced bun. Typical condiments include mustard, ketchup, relish, onions in tomato sauce, and cheese sauce. Common garnishes include sauerkraut, diced onions, jalapeños, chili, grated cheese, coleslaw, bacon, and olives.',
    specialMenu: 'false'
  },
  {
    title: 'Nashville Hot Chicken',
    category: 'american',
    price: '$56',
    tags: 'Nashville Hot Chicken, ultra-crispy, fiery fried chicken with a cayenne-infused glaze, and by glaze I mean melted butter and lard.',
    specialMenu: 'false'
  },
  {
    title: 'Jambalaya ',
    category: 'american',
    price: '$56',
    tags: 'Jambalaya is a Cajun and Creole dish from Louisiana. Both Creole (red) and Cajun (brown) jambalaya start with trinity, which is similar to mirepoix but with green pepper instead of carrots. Creole turns red with the addition of tomatoes.',
    specialMenu: 'false'
  },
  {
    title: 'Country Fried Steak',
    category: 'american',
    price: '$56',
    tags: 'Also known as chicken fried steak, country fried steak is cubed beef steak floured and breaded in the same way you would bread and fry chicken. It is then covered in southern white pepper gravy and often served with mashed or breakfast potatoes.',
    specialMenu: 'false'
  },
  {
    title: 'Meatloaf',
    category: 'american',
    price: '$56',
    tags: 'Made with ground beef, eggs, and breadcrumbs shaped into a loaf and baked, it can be bolstered with ground pork, sausage, any number of flavorings, and even have a hardboiled egg in the middle!',
    specialMenu: 'false'
  },
  {
    title: 'Macaroni and Cheese',
    category: 'american',
    price: '$56',
    tags: 'This Mac and Cheese Recipe is creamy, cheesy and delicious. The ultimate in comfort food, this pasta dish is made with a gooey homemade sauce of butter, milk and melted cheese. A light topping of breadcrumbs adds a fabulous crunch.',
    specialMenu: 'false'
  },
  {
    title: 'Chicken and Waffles',
    category: 'american',
    price: '$56',
    tags: 'Super crispy and perfectly spiced buttermilk fried chicken paired with fluffy and tender golden waffles!',
    specialMenu: 'false'
  },
  {
    title: 'Buffalo Wings',
    category: 'american',
    price: '$56',
    tags: 'A Buffalo wing is an unbreaded chicken wing section (flat or drumette) that is generally deep-fried and then coated or dipped in a sauce consisting of a vinegar-based cayenne pepper hot sauce and melted butter prior to serving.',
    specialMenu: 'false'
  },
  {
    title: 'Grilled Cheese Sandwich',
    category: 'american',
    price: '$56',
    tags: 'This classic grilled cheese sandwich recipe calls for just white bread, sliced cheddar cheese, and butter.',
    specialMenu: 'false'
  },
  {
    title: 'Philly Cheesesteak',
    category: 'american',
    price: '$56',
    tags: 'Philly Cheesesteak is a sandwich made with super thinly sliced ribeye steak, caramelized onion, and provolone cheese.',
    specialMenu: 'false'
  },
  {
    title: 'Barbecue',
    category: 'american',
    price: '$56',
    tags: 'Barbecuing is cooking foods low and slow. Barbecuing is usually used for cuts of meat like ribs, pork shoulder, beef brisket, or whole chickens or turkeys.',
    specialMenu: 'false'
  },
  {
    title: 'Submarine Sandwich',
    category: 'american',
    price: '$56',
    tags: 'The long sandwiches cut lengthwise and filled with meat, cheese, veggies, and condiments. They can be served hot or cold and are often stuffed with deli meats but have also been known to contain meatballs, chicken parmesan, and other more creative fillings.',
    specialMenu: 'false'
  },
  {
    title: 'Reuben Sandwich',
    category: 'american',
    price: '$56',
    tags: 'A Reuben is a grilled sandwich featuring corned beef on rye bread. The Reuben is a menu staple in Jewish-style delicatessens, but its not technically kosher because it combines meat and cheese.',
    specialMenu: 'false'
  },
  {
    title: 'Cobb Salad',
    category: 'american',
    price: '$56',
    tags: 'The Cobb salad is traditionally made with four types of greens, fried chicken, hardboiled eggs, bacon, bleu cheese, tomato, and avocado. Generally these ingredients are laid out in rows upon service.',
    specialMenu: 'false'
  },

  {
    title: 'Boeuf Bourguignon',
    category: 'french',
    price: '$56',
    tags: 'The meat is first browned before being slowly braised in the local pinot noir wine. The other components of beef bourguignon are simple and can include onions, garlic, thyme, carrots, potatoes, mushrooms, and herbs.',
    specialMenu: 'false'
  },
  {
    title: 'Steak Frites',
    category: 'french',
    price: '$56',
    tags: 'Steak Frites is the classic brasserie style steak. Crispy french fries soak up a juicy steak topped with compound herb butter.',
    specialMenu: 'false'
  },
  {
    title: 'Steak Tartare',
    category: 'french',
    price: '$56',
    tags: 'Steak tartare or tartar steak is a dish of raw ground (minced) beef. It is usually served with onions, capers, mushrooms, pepper, Worcestershire sauce, and other seasonings, often presented separately, to be added to taste. It is often served on top with a raw egg yolk.',
    specialMenu: 'false'
  },
  {
    title: 'Bouillabaisse',
    category: 'french',
    price: '$56',
    tags: 'Bouillabaisse, complex fish soup originating on the Mediterranean coast of France. It contains, besides fish and shellfish, olive oil, onions, tomatoes, garlic, parsley, saffron, fennel, thyme, bay leaf, and orange peel.',
    specialMenu: 'false'
  },
  {
    title: 'Coq au Vin',
    category: 'french',
    price: '$56',
    tags: 'Coq au vin is a hearty French stew of chicken braised in red wine with mushrooms and crisp pancetta. Serve with buttered egg noodles, mashed potatoes, or a good crusty bread — basically anything to soak up the full-flavored sauce.',
    specialMenu: 'false'
  },
  {
    title: 'Quiche Lorraine',
    category: 'french',
    price: '$56',
    tags: 'Quiche Lorraine is a combination of a delicious flaky Pie Crust that is filled with savory egg custard. Bacon, cheese, caramelized onions, and other fillings can take this quiche recipe from ordinary to extraordinary.',
    specialMenu: 'false'
  },
  {
    title: 'Tarte Flambée',
    category: 'french',
    price: '$56',
    tags: 'The thin crust is spread with cream, and onions and smoked pork bits are sprinkled across the surface.',
    specialMenu: 'false'
  },
  {
    title: 'Cassoulet',
    category: 'french',
    price: '$56',
    tags: 'All cassoulets are made with white beans, duck or goose confit, sausages, and additional meat. In the cassoulet of Toulouse, the meats are pork and mutton, the latter frequently a cold roast shoulder.',
    specialMenu: 'false'
  },
  {
    title: 'Croque Monsieur and Croque Madame',
    category: 'french',
    price: '$56',
    tags: 'A croque monsieur is traditionally made with baked or boiled ham and sliced cheese between slices of pain de mie, topped with grated cheese and slightly salted and peppered, and then baked in an oven or fried in a frying pan. The bread may optionally be browned by grilling after being dipped in beaten egg.',
    specialMenu: 'false'
  },
  {
    title: 'Cheese Soufflé',
    category: 'french',
    price: '$56',
    tags: 'This light and airy soufflé boasts both Parmigiano-Reggiano and Gruyère cheeses and gets a little sharp complexity from Dijon and dry mustard.',
    specialMenu: 'false'
  },
  {
    title: 'Ratatouille',
    category: 'french',
    price: '$56',
    tags: 'Ratatouille, is a French Provençal dish of stewed vegetables. Common ingredients include tomato, garlic, onion, courgette (zucchini), aubergine (eggplant, brinjal), capsicum (bell pepper), and some combination of leafy green herbs common to the region.',
    specialMenu: 'false'
  },
  {
    title: 'Coquilles Saint-Jacques',
    category: 'french',
    price: '$56',
    tags: 'The recipe features both scallops and mushrooms sautéed in butter with seasonings, then made even richer with a Gruyère and a breadcrumb topping.',
    specialMenu: 'false'
  },
  {
    title: 'Pot-au-Feu',
    category: 'french',
    price: '$56',
    tags: 'This classic French comfort dish is stewed meats with vegetables. The marrow is removed from the bone and spread on toast as a starter, the broth is served as a soup, and the meat is plated with the vegetables.',
    specialMenu: 'false'
  },
  {
    title: 'Jambon Beurre',
    category: 'french',
    price: '$56',
    tags: 'A jambon-beurre is a French ham sandwich made of a fresh baguette sliced open, spread with salty butter, and filled with slices of ham.',
    specialMenu: 'false'
  },
  {
    title: 'Confit de Canard',
    category: 'french',
    price: '$56',
    tags: 'Quite simply, duck cooked in its own fat. This is a traditional dish of south west France. Often served plain it can also arrive in a rich sauce containing cherries, red wine or orange.',
    specialMenu: 'false'
  },
  {
    title: 'Tartiflette',
    category: 'french',
    price: '$56',
    tags: 'Savoie and Haute Savoie are home to this piece of carb heaven. This iconic French menu item is a luxurious potato dish made with melted Reblochon cheese, lardons and onion, eaten as it comes.',
    specialMenu: 'false'
  }
];



const dessertCategory = [
  {
    category: 'Gerícht Nachtisch'
  },
  {
    category: 'cakes',
    description: 'Cakes are usually made of eggs, flours, baking powders, and icing. There are different kinds of cakes such as sponge cake, cupcake, and sweet breads.'
  },
  {
    category: 'custards',
    description: 'Custard encompasses cheese or cream, sweetened milk, and egg or egg yolk as a thickening agent. Some custard recipes also use gelatin, flour, or cornstarch.'
  },
  {
    category: 'puddings',
    description: 'The main ingredients in a pudding are milk or cream. However, the thickening agent in pudding is starches which helps to coagulate the base.'
  },
  {
    category: 'cookies',
    description: 'Theses are spoonfuls of batter baked in oven to perfection. It usually comes off with chocolate chips, nuts, sugar, oatmeal, meringues, and many more.'
  },
  {
    category: 'pies',
    description: 'Pies usually have crusts and fillings. Its crusts are made of graham crackers or pastry. Its sweet fillings includes puddings, fruits, nuts, and many more.'
  },
  {
    category: 'pastries',
    description: 'Buns, tasty breads, rolls, and so much more are forms of pastries. Usually, the dough is handled carefully and lightly to keep it light, airy and crispy.'
  },
  {
    category: 'gelatins',
    description: 'Gelatin-based desserts also known as Jelly uses a processed collagen item as gelatin and other elements like sweetened, flavored elements or fruits.'
  },
  {
    category: 'icecreams',
    description: 'Ice cream is a sweetened frozen dessert. It may be made from milk or cream and is flavoured with a sweetener and spice, such as cocoa or vanilla, or with fruits.'
  }
];



const dessertMenu = [
  {
    title: 'Black Forest Cake',
    category: 'cakes',
    price: '$23',
    tags: 'Super moist and flavorful with a deep chocolate flavor, the cake is layered with cherry filling and topped with homemade whipped cream. Absolutely decadent!',
    specialMenu: 'false'
  },
  {
    title: 'Pineapple Upside Down Cake',
    category: 'cakes',
    price: '$23',
    tags: 'You are going to love the tropical flavor of pineapple combined with the sweet caramelized edges. Just imagine how happy you would be when this cake greets you upside down!',
    specialMenu: 'false'
  },
  {
    title: 'Carrot Cake',
    category: 'cakes',
    price: '$23',
    tags: 'Its tender and melt in your mouth with moist crumbs. It has the perfect level of sweetness with plenty of finely shredded carrots. And, of course, its finished with a decadent frosting. Cream cheese frosting is the only way to go here!',
    specialMenu: 'false'
  },
  {
    title: 'Strawberry Shortcake',
    category: 'cakes',
    price: '$23',
    tags: 'This is made up of tender and fluffy vanilla cake. Its filled with homemade whipped cream and fresh strawberries and covered in a strawberry buttercream. The perfect shortcake for the season! You are going to love these easy and awesome flavors.',
    specialMenu: 'false'
  },
  {
    title: 'Berry Tres Leches Cake',
    category: 'cakes',
    price: '$23',
    tags: 'This Berry Tres Leches Cake begins with layers of vanilla sponge cake layers that are soaked with a three-milk mixture. Then it’s layered with a delicate mascarpone whipped cream frosting and tons of strawberries, blueberries, blackberries and raspberries!',
    specialMenu: 'false'
  },
  {
    title: 'Oreo Cookie',
    category: 'cakes',
    price: '$23',
    tags: 'This white cake studded with cookie pieces and topped with cookies and cream frosting.',
    subTags: 'Oreo cake | whip cream | oreos | choco chips',
    specialMenu: 'true'
  },
  {
    title: 'Red Velvet Cake',
    category: 'cakes',
    price: '$23',
    tags: 'This classic red velvet cake has a moist, fluffy crumb and decadent cream cheese frosting. This festive cake is great for holidays!',
    subTags: 'Red velvet cake | sugar syrup | whip cream | cherry',
    specialMenu: 'true'
  },
  {
    title: 'Coconut Cake',
    category: 'cakes',
    price: '$23',
    tags: 'This super moist Coconut Cake. This classic recipe uses fresh coconut (and a secret ingredient) and would be a huge hit on your holiday spread.',
    subTags: 'Coconut cake | whip cream | chocolate chips',
    specialMenu: 'true'
  },
  {
    title: 'Coffee Tres Leches Cake',
    category: 'cakes',
    price: '$23',
    tags: 'Coffee tres leches cake is a coffee flavored variation of the Latin classic tres leches cake. It starts with a light-and-airy sponge cake which is soaked with a coffee flavored milk syrup then frosted with a coffee whipped cream.',
    specialMenu: 'false'
  },
  {
    title: 'Dark Chocolate Mousse Cake',
    category: 'cakes',
    price: '$23',
    tags: 'The crumb uses unsweetened natural cocoa powder and dark cocoa powder for a ton of flavor. It’s layered with chocolate mousse and covered with semi-sweet chocolate ganache. This will satisfy the heartiest chocolate craving!',
    specialMenu: 'false'
  },
  {
    title: 'Chocolate Magic Cake',
    category: 'cakes',
    price: '$23',
    tags: 'It settles into three amazing layers: a fudgelike bottom layer, a custardy middle layer and a cakelike top layer… Magic!',
    specialMenu: 'false'
  },
  {
    title: 'Raspberry Tiramisu Cake',
    category: 'cakes',
    price: '$23',
    tags: 'This fruity take on the Italian favorite Tiramisu is to die for! Tender sponge cake, vanilla tiramisu filling and loads of raspberries all ringed with crisp lady finger cookies… so good!',
    specialMenu: 'false'
  },
  {
    title: 'Vanilla Cupcake',
    category: 'cakes',
    price: '$23',
    tags: 'These vanilla cupcakes are a breeze to make and come out perfect every time and go with any frosting or toppings you can imagine.',
    subTags: 'Vanilla cake | whip cream | cherry',
    specialMenu: 'true'
  },
  {
    title: 'Strawberry Dark Chocolate Truffle Cake',
    category: 'cakes',
    price: '$23',
    tags: 'This rich dark chocolate cake is layered with fresh strawberries, strawberry buttercream and chocolate ganache.',
    specialMenu: 'false'
  },
  {
    title: 'Molten Chocolate Lava Cake',
    category: 'cakes',
    price: '$23',
    tags: 'This Molten Chocolate Lava Cakes is soo decadent! When you cut into the fluffy chocolate crumb you are greeted with a molten gooey chocolate center. Awesome.',
    specialMenu: 'false'
  },
  {
    title: 'Blueberry Cake with Lemon Frosting',
    category: 'cakes',
    price: '$23',
    tags: 'This gorgeous cake is a great company pleaser. It looks so unassuming until you cut your first slice. The lemon infused cake is littered with tons of juicy blueberries and topped with lemon cream cheese frosting.',
    specialMenu: 'false'
  },

  {
    title: 'Chocolate Custard Cake',
    category: 'custards',
    price: '$23',
    tags: 'Chocolate custard cake is made from the softest layer at the bottom, middle layer, and the cake-similar layer at the top. You can enjoy these three layers in one batter with a variety of tastes and incredible textures.',
    specialMenu: 'false'
  },
  {
    title: 'Blueberry And Lemon Verbena Tarts',
    category: 'custards',
    price: '$23',
    tags: 'A perfect combo of buttery pastry, sweet, and tasty blueberry filling will attract your attention at first sight. These ingredients will keep this tart fresh and flavorful.',
    specialMenu: 'false'
  },
  {
    title: 'Coconut Custard And Rhubarb Tart',
    category: 'custards',
    price: '$23',
    tags: 'It is a mixture of vegetable oil, coconut milk, sugar, strawberry jelly, and vanilla extract. This gives a huge contribution to increasing flavors as well. Moreover, the color of rhubarb, strawberries, and coconut milk can make this custard brighter.',
    specialMenu: 'false'
  },
  {
    title: 'Custard Tart With Cream And Fresh Fruit',
    category: 'custards',
    price: '$23',
    tags: 'If you are looking for these tastes, cream and fresh fruits are great choices for your menu. Apples, pears, and raspberries are some names of fresh, nutritious, and delicious fruits you can add to this recipe.',
    specialMenu: 'false'
  },
  {
    title: 'Lemon-Buttermilk Tart',
    category: 'custards',
    price: '$23',
    tags: 'This sweet treat with lemon – lemon-buttermilk tart will satisfy your cravings with lemon zest, fruit juice, buttery butter, milk, semolina flour, egg yolks, and granulated sugar.',
    specialMenu: 'false'
  },
  {
    title: 'Blueberry Custard Pie',
    category: 'custards',
    price: '$23',
    tags: 'Everything is perfect with blueberry tastes, and it is no exception in this custard pie. Some fresh, appealing, and slightly sweet blueberries are added and baked along with pastry. The taste of milk, eggs, and sugar is mixed and poured into the custard.',
    specialMenu: 'false'
  },
  {
    title: 'Apple And Fig Custard',
    category: 'custards',
    price: '$23',
    tags: 'Eggs, granulated sugar, milk, apple brandy or dark rum, lemon zest, and figs are the main ingredients used to make this custard. After cooking butter foams, baked sliced apples are added to the dish. Figs and apple slices are put on the top as well.',
    specialMenu: 'false'
  },
  {
    title: 'Orange Cake With Cardamom Custard',
    category: 'custards',
    price: '$23',
    tags: 'One of the most common custard treats is this orange-based dessert. Indeed, the orange cake becomes particular based on its fantastic colors and ridiculous tastes. Oranges are used in both cake and syrup as well.',
    specialMenu: 'false'
  },
  {
    title: 'Apple And Berry Pies',
    category: 'custards',
    price: '$23',
    tags: 'They are a mixture of sugar; at a certain temperature, this pie is baked and added with some flavorful toppings such as slices of apples and berries to make this custard pie perfect.',
    specialMenu: 'false'
  },
  {
    title: 'Banana Meringue Pudding',
    category: 'custards',
    price: '$23',
    tags: 'Eggs, butter, bananas, milk, and vanilla extract are some main ingredients. A crack or trail in the pudding is a good hint for better taste.',
    specialMenu: 'false'
  },
  {
    title: 'Baked Plum Pudding',
    category: 'custards',
    price: '$23',
    tags: 'An Italian-style pudding. Delicious, sweet, soft, scented, and eye-catching. This is suitable for sipping coffee and eating a piece of pudding.',
    specialMenu: 'false'
  },
  {
    title: 'Strawberry, Rhubarb, And Custard Trifle',
    category: 'custards',
    price: '$23',
    tags: 'A colorful custard dessert is on these hot days. Strawberries are combined with rhubarb: easy and simple recipe but stunning results.',
    specialMenu: 'false'
  },
  {
    title: 'Greek Custard Pie',
    category: 'custards',
    price: '$23',
    tags: 'Semolina flour, milk, cornstarch, eggs, and sugar can be found in your cooking spaces. Take time and make your Greek custard pie.',
    specialMenu: 'false'
  },
  {
    title: 'Bavarian Cream Cake',
    category: 'custards',
    price: '$23',
    tags: 'This is an ordinary recipe that you can make with super simple ingredients in your spaces. Eggs, milk, sugar, gelatin, vanilla, and heavy cream are mixed and cooked at a certain time. Chocolate can be added if you prefer.',
    specialMenu: 'false'
  },
  {
    title: 'Bourbon-Butterscotch Pudding',
    category: 'custards',
    price: '$23',
    tags: 'This pudding is made from a smooth texture, caramelized brown sugar surface, appealing vanilla extraction, slightly bourbon, creamy whipped cream, and sweet butterscotch.',
    specialMenu: 'false'
  },
  {
    title: 'Leche Flan',
    category: 'custards',
    price: '$23',
    tags: 'Made with condensed milk with more egg yolks. It is a perfect combination of caramel and custard.',
    specialMenu: 'false'
  },

  {
    title: 'Gajar ka halwa',
    category: 'puddings',
    price: '$23',
    tags: 'Gajar ka halwa is a sweet pudding made with grated carrots, milk, sugar, nuts, clarified butter known as ghee, and dried milk known as khoya. This dessert can be modified by adding either seasonal or regional ingredients',
    specialMenu: 'false'
  },
  {
    title: 'Sholeh zard',
    category: 'puddings',
    price: '$23',
    tags: 'Saffron rice pudding known as sholeh zard is an ancient Iranian dessert. The rice is cooked in water and then enriched with saffron and sugar, while common additions include slivered nuts and spices such as cardamom and cinnamon.',
    specialMenu: 'false'
  },
  {
    title: 'Phirni',
    category: 'puddings',
    price: '$23',
    tags: 'Phirni is a dessert made with ground rice thats cooked in milk and flavored with almonds, saffron, and cardamom. Phirni is always eaten well-chilled and garnished with nuts, rose petals, and often with silver paper or chandi warq.',
    specialMenu: 'false'
  },
  {
    title: 'Christmas Pudding',
    category: 'puddings',
    price: '$23',
    tags: 'Christmas pudding contains fruits, eggs, suet, molasses, and spices instead of it, and every family has their own recipe for this steamed treat.',
    specialMenu: 'false'
  },
  {
    title: 'Banana Pudding',
    category: 'puddings',
    price: '$23',
    tags: 'It typically consists of layered vanilla custard, sliced bananas, and wafers or ladyfingers. The concoction is then topped with either meringue or whipped cream.',
    specialMenu: 'false'
  },
  {
    title: 'Kazandibi',
    category: 'puddings',
    price: '$23',
    tags: 'Kazandibi is a Turkish dish that can be translated to burnt bottom pudding, referring to the burnt bottom of the pan that it is cooked in. The dessert consists of butter, milk, rice flour, sugar, starch, and flavorings such as vanilla, rosewater, or ground mastic gum.',
    specialMenu: 'false'
  },
  {
    title: 'Arroz con leche',
    category: 'puddings',
    price: '$23',
    tags: 'Consisting of a few key ingredients: cooked rice, milk, sugar, cinnamon sticks for flavoring, and either lemon or orange peel. Some are baked in the oven, while the others are made on the stovetop. The dessert can be served warm or cold, and it is recommended to garnish it with some ground cinnamon on top.',
    specialMenu: 'false'
  },
  {
    title: 'Plum Pudding',
    category: 'puddings',
    price: '$23',
    tags: 'Plum pudding has roots in medieval English sausages when fruits, spices, and fat used to be combined with grains, meats, and vegetables, then packed into animal intestines in order to keep as long as possible.',
    specialMenu: 'false'
  },
  {
    title: 'Arroz doce',
    category: 'puddings',
    price: '$23',
    tags: 'Arroz doce is a sweet rice pudding made with rice, milk, sugar, eggs, cinnamon, and salt. It is said that the best arroz doce should be crispy on the exterior and custard-like and soft on the interior. It is typically served chilled, flavored with lemon peel, and sprinkled with cinnamon on top in a lattice pattern.',
    specialMenu: 'false'
  },
  {
    title: 'Khao niao mamuang',
    category: 'puddings',
    price: '$23',
    tags: 'This traditional Thai rice pudding is a favorite way to finish any Thai meal. The dish is prepared with glutinous rice that is first steamed, then doused in sweetened coconut milk. Lastly, the rice is served sided with slices of fresh mango.',
    specialMenu: 'false'
  },
  {
    title: 'Budino',
    category: 'puddings',
    price: '$23',
    tags: 'The Italian word budino refers to a range of sweet and savory dishes that come in a number of different forms, shapes, and flavors. There are three main types of budino: crème caramel made with cold ingredients and cooked in a mold in a bain-marie; crème anglaise made by cooking the ingredients in hot milk and transferring them into a mold; and the savory Italian flan variety.',
    specialMenu: 'false'
  },
  {
    title: 'Mehalabiya',
    category: 'puddings',
    price: '$23',
    tags: 'Mehalabiya is a creamy Arabian dessert, in many ways similar to the French blancmange. It is made with a mixture of milk and sugar, cooked and thickened with cornstarch, and usually flavored with orange blossom or rose water. While hot, it is distributed in smaller molds, left to set, and it is then served cold.',
    specialMenu: 'false'
  },
  {
    title: 'Tavuk göğsü',
    category: 'puddings',
    price: '$23',
    tags: 'It is often flavored with cinnamon and vanilla, and is more reminiscent of a thick, creamy, and smooth milk or rice pudding, both in flavor and appearance.',
    specialMenu: 'false'
  },
  {
    title: 'Pudim de leite condensado',
    category: 'puddings',
    price: '$23',
    tags: 'This traditional Brazilian dessert is a type of creamy, caramel-coated custard flan. The standard ingredients of pudim de leite condensado include sweetened condensed milk, regular whole milk, eggs, and sugar.',
    specialMenu: 'false'
  },
  {
    title: 'Kheer',
    category: 'puddings',
    price: '$23',
    tags: 'Kheer or payasam is an ancient Indian dessert, a creamy rice pudding. Kheer is made by boiling rice, wheat, or tapioca with milk and sugar, and it can be additionally flavored with dried fruits, nuts, cardamom, and saffron.',
    specialMenu: 'false'
  },
  {
    title: 'Panna cotta',
    category: 'puddings',
    price: '$23',
    tags: 'When made to perfection and properly chilled, panna cotta is silky smooth, deliciously creamy, and has a gentle wobble to it. For a slightly lighter version of this scrumptious dessert, use half-and-half instead of heavy cream, or simply dilute heavy cream with milk.',
    specialMenu: 'false'
  },

  {
    title: 'Snickerdoodles',
    category: 'cookies',
    price: '$23',
    tags: 'Snickerdoodles are a type of drop cookie (any cookie that is formed by dropping spoonfuls of dough directly onto a baking sheet) that is coated in cinnamon and sugar. They can be crisp or soft, with a slightly cracked surface.',
    specialMenu: 'false'
  },
  {
    title: 'Chocolate Chip Cookies',
    category: 'cookies',
    price: '$23',
    tags: 'Chocolate chip cookies are drop cookies that can be soft and doughy or crisp and crunchy depending on how long you cook them or what ingredients you use.',
    specialMenu: 'false'
  },
  {
    title: 'Oatmeal Raisin Cookies',
    category: 'cookies',
    price: '$23',
    tags: 'A seriously underrated cookie, oatmeal raisin is another type of drop cookie. Its dough is oatmeal based and contains raisins and brown sugar. Theyre warm and comforting — a reminder of simpler times and grandmas house.',
    specialMenu: 'false'
  },
  {
    title: 'Gingersnaps',
    category: 'cookies',
    price: '$23',
    tags: 'Ginger nuts or ginger biscuits, these spicy treats are popular all around the world. Powdered ginger, cinnamon, molasses, and nutmeg make this popular holiday cookie the perfect blend of sweet and spicy.',
    specialMenu: 'false'
  },
  {
    title: 'Shortbread Cookies',
    category: 'cookies',
    price: '$23',
    tags: 'Shortbread cookies have a very high ratio of butter or shortening to flour, hence the name "short." They differ from butter cookies in that they have lower quantities of flour and sugar, giving them a more crumbly and tender texture.',
    specialMenu: 'false'
  },
  {
    title: 'Peanut Butter Cookies',
    category: 'cookies',
    price: '$23',
    tags: 'A favorite for all the peanut butter lovers, these cookies are made with hand-rolled dough that is often flattened with a fork to achieve that familiar waffle pattern.',
    specialMenu: 'false'
  },
  {
    title: 'Whoopie Pies',
    category: 'cookies',
    price: '$23',
    tags: 'These sandwich-style cookies are made with two soft, pillowy cookies and a marshmallow filling. Traditionally chocolate cookies were used to make whoopie pies, but they have since expanded to everything from red velvet to pumpkin.',
    specialMenu: 'false'
  },
  {
    title: 'Sugar Cookies',
    category: 'cookies',
    price: '$23',
    tags: 'The sugar cookie is like the vanilla ice cream of cookies—everyone likes it but few claim it as their favorite. Basic ingredients like sugar, flour, butter, eggs, and vanilla make up this popular cookie type.',
    specialMenu: 'false'
  },
  {
    title: 'Molasses Cookies',
    category: 'cookies',
    price: '$23',
    tags: 'Molasses cookies are made with just as much ginger. Sometimes molasses is the sole sweetener in these cookies, and other times it is made with a mixture of sugar and molasses.',
    specialMenu: 'false'
  },
  {
    title: 'Kiss Cookies',
    category: 'cookies',
    price: '$23',
    tags: 'Kiss cookies are made by pressing a chocolate kiss into soft, fresh-out-of-the-oven cookies. They are fairly customizable—choose whatever base you would like for the cookie.',
    specialMenu: 'false'
  },
  {
    title: 'Biscotti',
    category: 'cookies',
    price: '$23',
    tags: 'The origin of the word biscotti literally means "twice-cooked/baked" as biscotti is twice baked, resulting in its hard texture and long shelf life.',
    specialMenu: 'false'
  },
  {
    title: 'Butter Cookies',
    category: 'cookies',
    price: '$23',
    tags: 'Butter cookies have a high proportion of butter to flour. Butter cookies have increased amounts of flour and sugar, helping them to hold their shape better than shortbread.',
    specialMenu: 'false'
  },
  {
    title: 'Spritz Cookies',
    category: 'cookies',
    price: '$23',
    tags: 'Spritz cookies can come in a variety of colors and flavors, including almond, peanut butter, orange, chocolate, and more. Dip them in chocolate and decorate with sprinkles for a festive treat.',
    specialMenu: 'false'
  },
  {
    title: 'Snowball Cookies',
    category: 'cookies',
    price: '$23',
    tags: 'They are balls of buttery shortbread filled with pecans and rolled with powdered sugar. A wintery sweet no one can resist!',
    specialMenu: 'false'
  },
  {
    title: 'Drop Cookies',
    category: 'cookies',
    price: '$23',
    tags: 'A drop cookie is any cookie that is made by dropping spoonfuls of dough directly onto a baking sheet. This means lots of cookies can be drop cookies such as chocolate chip, oatmeal raisin, and more.',
    specialMenu: 'false'
  },
  {
    title: 'Thumbprint Cookies',
    category: 'cookies',
    price: '$23',
    tags: 'These round, shortbread cookies are made by pressing your thumb into the dough to make a hole that can then be filled with a variety of jams.',
    specialMenu: 'false'
  },

  {
    title: 'Double-Crust Apple Pie',
    category: 'pies',
    price: '$23',
    tags: 'The most famous of the traditional double-crust pies, apple pie can be topped with a lattice design or a complete pastry cover. It is the ultimate American comfort food, can be made using several kinds of apples, and is perfect à la mode.',
    specialMenu: 'false'
  },
  {
    title: 'Banana Pudding Pie',
    category: 'pies',
    price: '$23',
    tags: 'Cool, creamy, and nostalgic, banana pudding gets a gourmet upgrade thanks to buttery, roasted macadamia nuts in the classic vanilla wafer crust.',
    specialMenu: 'false'
  },
  {
    title: 'Cherry-Berry Pie',
    category: 'pies',
    price: '$23',
    tags: 'Cherry pie is a cornerstone of summer desserts, and the lattice design makes it one of the prettiest additions to any gathering. We provide this version with pitted sweet cherries, raspberries, and blueberries.',
    specialMenu: 'false'
  },
  {
    title: 'Tiramisu Icebox Pie',
    category: 'pies',
    price: '$23',
    tags: 'Classic tiramisu — ladyfingers, coffee, and mascarpone — and reimagines them as an icebox pie. The dessert is full of playful textures and flavors, including a dense coffee mousse and salty-sweet coffee crunchies.',
    specialMenu: 'false'
  },
  {
    title: 'Coconut Cream Pie',
    category: 'pies',
    price: '$23',
    tags: 'This fluffy, custard-filled pie from pastry chef Kierin Baldwin is a tropical-flavored treat. Every part of the dessert has coconut: the crust, the filling, and the topping.',
    specialMenu: 'false'
  },
  {
    title: 'Lemony Sumac Pie with Ritz Cracker Crust',
    category: 'pies',
    price: '$23',
    tags: 'Ritz cracker crumbs as a salty, buttery foil to puckery lemon. Sumac, a tart spice that adds floral aroma and pops of red color, backs up fresh lemon juice in this sweet and sour filling.',
    specialMenu: 'false'
  },
  {
    title: 'Black-and-Blue Pie with Brown Sugar Crumb',
    category: 'pies',
    price: '$23',
    tags: 'Huckleberries and blackberries create the namesake black-and-blue filling, but a mix of any brambleberries and blueberries will do. A crumb topping adds texture and helps absorb some of the pies juice, allowing it to slice cleanly.',
    specialMenu: 'false'
  },
  {
    title: 'Boston Cream Pie',
    category: 'pies',
    price: '$23',
    tags: 'Boston cream pie, with a light and delicately sweet pastry cream filling and a great sponge cake. Top it with the silky dark chocolate ganache and serve it cold.',
    specialMenu: 'false'
  },
  {
    title: 'Sour Cherry Pie',
    category: 'pies',
    price: '$23',
    tags: 'Almond and sour cherries have complimentary flavor profiles; together, they create a delicious and elegant pie with perfect flavor balance. The frangipane along with the sour cherries give the pie a tender and custard-y filling with a pop of tartness and textures.',
    specialMenu: 'false'
  },
  {
    title: 'Sweet Potato Honey Beer Pie',
    category: 'pies',
    price: '$23',
    tags: 'Roast sweet potatoes, reduce the beer, and prepare the pie crust, but dont blind bake (partially bake). Blind bake the pie crust, prepare the sweet potato custard, and bake the pie.',
    specialMenu: 'false'
  },
  {
    title: 'All-American Cinnamon Apple Pie',
    category: 'pies',
    price: '$23',
    tags: 'This pie gets its intensely apple-y flavor from macerating the apples in sugar for an hour. The liquid drained from the apples is simmered with a hit of butter until a syrup forms. That rich syrup is mixed with the apples, piled into the crust, and baked until tender and delicious.',
    specialMenu: 'false'
  },
  {
    title: 'Mountain Rose Apple Pie',
    category: 'pies',
    price: '$23',
    tags: 'This take on apple pie turns more toward an apple crumble, with a buttery and crispy crumble layered on top full of rolled oats and dark brown sugar.',
    specialMenu: 'false'
  },
  {
    title: 'Strawberry Slab Pie',
    category: 'pies',
    price: '$23',
    tags: 'With a perfectly buttery crust and a sweet, jammy filling, this slab pie is one of the most delicious strawberry pie desserts you will eat all summer.',
    specialMenu: 'false'
  },
  {
    title: 'Georgia Peach Pie',
    category: 'pies',
    price: '$23',
    tags: 'When you slice into this delicious pie, dont be surprised by the gap between the filling and the top crust. This happens when a pie is baked at high heat because the crust sets before the fruit in the filling has cooked down.',
    specialMenu: 'false'
  },
  {
    title: 'Creamy Peanut Butter Pie',
    category: 'pies',
    price: '$23',
    tags: 'This luscious whipped cream-topped peanut butter pie offers the ideal balance of sweet and salty flavors.',
    specialMenu: 'false'
  },
  {
    title: 'Grilled S’mores Pie',
    category: 'pies',
    price: '$23',
    tags: 'This decadent pie with a chocolate ganache filling is topped with gooey toasted marshmallows, giving you all the flavors of s’mores but in a pie cooked on a grill.',
    specialMenu: 'false'
  },

  {
    title: 'Profiteroles',
    category: 'pastries',
    price: '$23',
    tags: 'These chocolate-covered puff pastries are filled with either whipped cream, custard, pastry cream, or vanilla ice cream.',
    specialMenu: 'false'
  },
  {
    title: 'Baklava',
    category: 'pastries',
    price: '$23',
    tags: 'The remarkable baklava is a luscious dessert created with layers of thin phyllo dough intertwined with chopped nuts, all doused in a sweet, viscous syrup.',
    specialMenu: 'false'
  },
  {
    title: 'Brioche',
    category: 'pastries',
    price: '$23',
    tags: 'This baked specialty is a French type of viennoiserie, a cross between a pastry and a bread, with a high butter, milk, and egg content that makes it rich, soft, and flaky.',
    specialMenu: 'false'
  },
  {
    title: 'Cannoli',
    category: 'pastries',
    price: '$23',
    tags: 'These decadent, crispy fried pastry tubes filled with luscious ricotta cheese cream.',
    specialMenu: 'false'
  },
  {
    title: 'Éclair',
    category: 'pastries',
    price: '$23',
    tags: 'These elongated pastries with an appealing glaze, a crispy exterior, a soft doughy interior, and a sweet, creamy center.',
    specialMenu: 'false'
  },
  {
    title: 'Börek',
    category: 'pastries',
    price: '$23',
    tags: 'Börek is a baked dish consisting of a savory or sweet filling wrapped in yufka - thinly stretched sheets of dough made with flour, water, and salt. Heartier than phyllo, but thinner than a tortilla, hand-made yufka is typically brushed with butter before baking.',
    specialMenu: 'false'
  },
  {
    title: 'Churros',
    category: 'pastries',
    price: '$23',
    tags: 'Elongated, crispy, crunchy and intensely fragrant, churros consist of deep-fried yeast dough encrusted with sugar.',
    specialMenu: 'false'
  },
  {
    title: 'Mooncake',
    category: 'pastries',
    price: '$23',
    tags: 'An ancient Chinese delicacy eaten during the Mid-August Festival or Moon Festival, known as mooncake, is a pie-like pastry made with a shortcrust base called yueh ping that is traditionally filled with black sesame seed or lotus seed paste, along with red beans, roasted pork, mung beans, dates, and salted duck egg yolks.',
    specialMenu: 'false'
  },
  {
    title: 'Doughnut',
    category: 'pastries',
    price: '$23',
    tags: 'Doughnuts are usually deep fried from a flour dough, but other types of batters can also be used. Various toppings and flavorings are used for different types, such as sugar, chocolate or maple glazing.',
    specialMenu: 'false'
  },
  {
    title: 'Croissant',
    category: 'pastries',
    price: '$23',
    tags: 'These flaky, golden-colored, crescent-shaped pastries are best made with pure butter and a slightly sweet yeast dough. If made properly, the yellow-white interior should be just the slightest bit elastic when pulled from the center, ready to be covered with a pad of butter or some fresh jam.',
    specialMenu: 'false'
  },
  {
    title: 'Krapfen',
    category: 'pastries',
    price: '$23',
    tags: 'Krapfen was probably the first European-style doughnut to appear, followed by similar varieties in other countries. These pastries are traditionally prepared with leavened dough that is deep-fried until golden and crispy on the outside, while they remain soft, light, and airy on the inside.',
    specialMenu: 'false'
  },
  {
    title: 'Açma',
    category: 'pastries',
    price: '$23',
    tags: 'Açma is a type of Turkish pastry characterized by its soft and flaky texture. The soft dough is traditionally twisted and rolled up into a bagel, which can be made in a sweet or savory version. It consists of flour, sugar, salt, yeast, yogurt, milk, eggs, butter, and olive oil.',
    specialMenu: 'false'
  },
  {
    title: 'Egg Tart',
    category: 'pastries',
    price: '$23',
    tags: 'One of the most famous Chinese desserts is the classic egg tart, a delicious pastry consisting of a flaky outer shell with a creamy, but firm egg custard in the center.',
    specialMenu: 'false'
  },
  {
    title: 'Rosquillas',
    category: 'pastries',
    price: '$23',
    tags: 'Rosquillas are traditional Spanish deep-fried donuts, characterized by their fluffy texture and a hole in the middle. The classic ones are prepared with a combination of eggs, sugar, milk, oil, lemon zest, flour, baking powder, and anisette, which imparts a unique flavor to these tasty donuts.',
    specialMenu: 'false'
  },
  {
    title: 'Spanakopita',
    category: 'pastries',
    price: '$23',
    tags: 'Spanakopita is a Greek spinach pie consisting of a buttery, flaky phyllo pastry with a filling of cooked spinach, lemon juice, feta cheese, and sometimes dill. It can be served either as a small snack, an appetizer, or a light main course.',
    specialMenu: 'false'
  },
  {
    title: 'Burek',
    category: 'pastries',
    price: '$23',
    tags: 'Burek is baked rolled into a snail-like shape and this type is typically found in bakeries, while traditional restaurants often make it in the form of a pie, which is sliced into quarters before serving.',
    specialMenu: 'false'
  },

  {
    title: 'Rainbow Gelatin Cubes',
    category: 'gelatins',
    price: '$23',
    tags: 'These layered jello cubes are fun to serve and to eat! I vary the colors to match the occasion.',
    specialMenu: 'false'
  },
  {
    title: 'Strawberry-Rhubarb Upside-Down Cake',
    category: 'gelatins',
    price: '$23',
    tags: 'I prepare this colorful dessert quite often in the late spring or summer when fresh rhubarb is abundant. I make this rhubarb cake with cake mix and take it to church potlucks.',
    specialMenu: 'false'
  },
  {
    title: '7-Layer Gelatin Salad',
    category: 'gelatins',
    price: '$23',
    tags: 'Here is an eye-catching salad that my mother makes for Christmas dinner each year. You can choose different flavors to make other color combinations for specific holidays or other gatherings.',
    specialMenu: 'false'
  },
  {
    title: 'Pretzel Gelatin Dessert',
    category: 'gelatins',
    price: '$23',
    tags: 'This is one of my mothers absolute favorite desserts. The salty pretzel crust is the perfect complement to the sweet cream cheese filling.',
    specialMenu: 'false'
  },
  {
    title: 'Pina Colada Jam',
    category: 'gelatins',
    price: '$23',
    tags: 'If you like pina coladas, you will love this! But here is the kicker: The secret ingredient is fresh zucchini. Spread the jam on crackers and cheese or add to a pan sauce to give chicken.',
    specialMenu: 'false'
  },
  {
    title: 'Stained Glass Gelatin',
    category: 'gelatins',
    price: '$23',
    tags: 'Kids love this sweet, wiggly gelatin and whipped topping dessert. Use different flavors of gelatin to make color versions that are as wild as your imagination.',
    specialMenu: 'false'
  },
  {
    title: 'Lime Gelatin Salad',
    category: 'gelatins',
    price: '$23',
    tags: 'Looking for a festive dish to light up the buffet? This pretty green gelatin salad is eye-catching and has a delightful, tangy flavor.',
    specialMenu: 'false'
  },
  {
    title: 'Orange Gelatin Pretzel Salad',
    category: 'gelatins',
    price: '$23',
    tags: 'Salty pretzels pair nicely with the sweet fruit in this refreshing layered salad. It’s a family favorite that is a slam-dunk at potlucks.',
    specialMenu: 'false'
  },
  {
    title: 'Easy Citrus Slush',
    category: 'gelatins',
    price: '$23',
    tags: 'Our church’s hostess committee has relied on this refreshing drink for bridal and baby showers and other events. We often use different flavored gelatins to match the decor of the occasion.',
    specialMenu: 'false'
  },
  {
    title: 'Raspberry Cake',
    category: 'gelatins',
    price: '$23',
    tags: 'Jazz up plain cake with raspberry gelatin and frozen berries. Spread with a light, fruity whipped topping (or this whipped topping substitute), the festive results make a cool and refreshing dessert.',
    specialMenu: 'false'
  },
  {
    title: 'Layered Christmas Gelatin',
    category: 'gelatins',
    price: '$23',
    tags: 'Christmastime always means that this recipe comes out of my recipe box. The traditional holiday colors in this salad make the buffet table look so pretty.',
    specialMenu: 'false'
  },
  {
    title: 'Apricot Fluff',
    category: 'gelatins',
    price: '$23',
    tags: 'It has become a must-have at every barbecue I attend. It is sublime with peaches and peach gelatin, too.',
    specialMenu: 'false'
  },
  {
    title: 'Jellied Champagne Dessert',
    category: 'gelatins',
    price: '$23',
    tags: 'This refreshing dessert looks just like a glass of bubbling champagne.',
    specialMenu: 'false'
  },
  {
    title: 'Molded Cranberry-Orange Salad',
    category: 'gelatins',
    price: '$23',
    tags: 'When I take this dish to potlucks during the holidays, people always ooh and aah. Feel free to top with whipped cream for added appeal.',
    specialMenu: 'false'
  },
  {
    title: 'Spiced Apple Cider Jelly Shots',
    category: 'gelatins',
    price: '$23',
    tags: 'These spiced, spiked gelatin squares are sure to get the party started at fall get-togethers. If you’re going for the more traditional shot-style look, pour the mixture into 2-ounce plastic cups and refrigerate until set.',
    specialMenu: 'false'
  },
  {
    title: 'Fluffy Key Lime Pie',
    category: 'gelatins',
    price: '$23',
    tags: 'For a taste of paradise, try this no-bake Key lime pie recipe. It is low in fat, sugar and fuss. It truly is the best Key lime pie recipe ever!',
    specialMenu: 'false'
  },

  {
    title: 'Fried Ice Cream Dessert Bars',
    category: 'icecreams',
    price: '$23',
    tags: 'Fried ice cream is such a delicious treat, but it can be a hassle to make individual servings. This recipe gives you the same fabulous flavor in an easy and convenient bar form.',
    specialMenu: 'false'
  },
  {
    title: 'Chocolate Peanut Butter Shakes',
    category: 'icecreams',
    price: '$23',
    tags: 'These rich chocolate peanut butter shakes will make you feel as if you are sitting in a 1950s soda fountain. Make it modern with an over-the-top garnish like skewered doughnut holes, chocolate-dipped cookies or fluffernutter sandwich squares.',
    specialMenu: 'false'
  },
  {
    title: 'Spumoni Baked Alaska',
    category: 'icecreams',
    price: '$23',
    tags: 'For a refreshing end to a rich meal, try this freezer finale. Its intriguing interior and pretty color scheme are bound to garner oohs and aahs.',
    specialMenu: 'false'
  },
  {
    title: 'Ice-Cream Sandwiches',
    category: 'icecreams',
    price: '$23',
    tags: 'These chilly gluten-free ice cream sandwiches are perfect for hot, sunny days. The gluten-free chocolate cookie is so tasty you could eat it plain…but you wont want to miss out on the ice cream!',
    subTags: 'Ice-cream | choco cookies | granulated sugar',
    specialMenu: 'true'
  },
  {
    title: 'Grilled Peach Sundaes',
    category: 'icecreams',
    price: '$23',
    tags: 'These peaches with a hint of grill flavor are sweet and juicy. We serve them in a waffle bowl with ice cream.',
    subTags: 'Peaches | ice-cream | waffles',
    specialMenu: 'true'
  },
  {
    title: 'Margarita Floats',
    category: 'icecreams',
    price: '$23',
    tags: 'On a hot afternoon, what could be better than a cold margarita float? The addition of creamy ice cream really takes this treat to the next level.',
    subTags: 'Margarita | vanilla ice-cream',
    specialMenu: 'true'
  },
  {
    title: 'Snickerdoodle Ice Cream Sandwich Minis',
    category: 'icecreams',
    price: '$23',
    tags: 'Absolutely loves ice cream sandwiches and snickerdoodles, so I combined them into one fun treat. Here’s how we build this cool dessert.',
    specialMenu: 'false'
  },
  {
    title: 'Raspberry Ice Cream Delight',
    category: 'icecreams',
    price: '$23',
    tags: 'This gorgeous make-ahead dessert is a light, refreshing ending to a summer meal. I first made it for my aunt’s 85th birthday dinner and everyone loved it!',
    specialMenu: 'false'
  },
  {
    title: 'Ice-Cream Tacos',
    category: 'icecreams',
    price: '$23',
    tags: 'Talk about a fun presentation! These cute desserts look just like a taco—but they are stuffed with chocolate ice cream and topped with cherries and coconut instead of tomatoes and lettuce.',
    subTags: 'Ice-cream (any flavor) | spicy tacos | chocolate dressing',
    specialMenu: 'true'
  },
  {
    title: 'Limoncello Cream Pie',
    category: 'icecreams',
    price: '$23',
    tags: 'After a big Christmas dinner, we love the cool refreshment of a frozen lemon pie. Limoncello brings a little sophistication to each smooth, creamy slice.',
    specialMenu: 'false'
  },
  {
    title: 'Watermelon Bombe Dessert',
    category: 'icecreams',
    price: '$23',
    tags: 'When cut, this sherbet dessert looks like actual watermelon slices—complete with seeds. It is fun to eat and refreshing, too.',
    specialMenu: 'false'
  },
  {
    title: 'Spiced Pumpkin Ice Cream Puffs',
    category: 'icecreams',
    price: '$23',
    tags: 'This extraordinary dessert showcases homemade pumpkin ice cream and cream puffs. The effort is worthwhile…and you can make the parts ahead of time for easy assembly later.',
    specialMenu: 'false'
  },
  {
    title: 'Strawberry Ice Cream Charlotte',
    category: 'icecreams',
    price: '$23',
    tags: 'My family loves ice cream cake, so they were delighted when I first presented this dessert. Its light, delicious and has a festive presentation.',
    specialMenu: 'false'
  },
  {
    title: 'Rainbow Sherbet Angel Food Cake',
    category: 'icecreams',
    price: '$23',
    tags: 'Talk about a dessert that pops. Sometimes I make this easy cake even more eye-catching by coloring the whipped cream too. Use whatever sherbet flavor combination you like.',
    specialMenu: 'false'
  },
  {
    title: 'Chocolate Caramel Hazelnut Pie',
    category: 'icecreams',
    price: '$23',
    tags: 'I love chocolate, caramel and hazelnuts, so I came up with a recipe that has all three. If you dont have a food processor, place crust ingredients in a zip-top freezer bag and smash with a rolling pin.',
    specialMenu: 'false'
  },
  {
    title: 'Warm Pineapple Sundaes with Rum Sauce',
    category: 'icecreams',
    price: '$23',
    tags: 'Pineapple, rum and sugar have a longstanding and flavorful relationship that takes on new meaning when you add ginger and butter and turn up the heat.',
    specialMenu: 'false'
  }
];



const barCategory = [
  {
    category: 'Gerícht Getränke'
  },
  {
    category: 'wines',
    description: 'Wine is an alcoholic drink typically made from fermented grapes. Yeast consumes the sugar in the grapes and converts it to ethanol and carbon dioxide.'
  },
  {
    category: 'whiskey',
    description: 'Whiskey is a type of distilled alcoholic beverage made from fermented grain mash. Various grains including barley, corn, rye, and wheat are used.'
  },
  {
    category: 'beers',
    description: 'Beer is produced by the brewing and fermentation of starches, mainly derived from cereal grains of malted barley, wheat, maize, rice, and oats are used.'
  },
  {
    category: 'champagne',
    description: 'Champagne is a sparkling wine of grapes with specific grape-pressing methods and secondary fermentation of the wine in the bottle to cause carbonation.'
  },
  {
    category: 'tequila',
    description: 'Tequila is a distilled beverage made from the blue agave plant, primarily in the area surrounding the city of Tequila and in the Jaliscan Highlands.'
  },
  {
    category: 'cocktails',
    description: 'A cocktail is a mixed drink made with a distilled liquor as its base ingredient and contain juice, fruit, honey, cream, spices, or other flavorings.'
  },
  {
    category: 'shots',
    description: 'A shooter, is a small serving of spirits or a mixed drink, often consumed in a single gulp. They can be shaken, stirred, blended, layered, poured.'
  },
  {
    category: 'beverages',
    description: 'A wide range of drinks ranging from carbonated like pepsi, coca cola, fanta, mountain dew, sprite to hot caffeinated drinks like coffee, hot chocolate.'
  }
];



const barMenu = [
  {
    title: 'Chapel Hill Shiraz',
    category: 'wines',
    price: '$56',
    tags: 'Chapel Hills McLaren Vale range of wines demonstrate the winerys sense of place. These single varietal expressions utterly encapsulates the charm of McLaren Vale and shares what makes the region so special.',
    subTags: 'AU | Bottle',
    specialMenu: 'true'
  },
  {
    title: 'Catena Malbec',
    category: 'wines',
    price: '$59',
    tags: 'A rich, soft plum and blackcurrant-flavoured red with a long, satisfying finish and smooth tannins. Made from a 100% Malbec grapes sourced from some of the best vineyard sites in Argentina.',
    subTags: 'AU | Bottle',
    specialMenu: 'true'
  },
  {
    title: 'La Vieillw Rose',
    category: 'wines',
    price: '$44',
    tags: 'France - Pretty delicate petal-rose colour. This wine offers an expressive, particularly fruity nose with notes of red fruit and citrus. On the palate, this wine shows a beautiful aromatic richness and a perfect balance between the body and the freshness.',
    subTags: 'FR | 750 ml',
    specialMenu: 'true'
  },
  {
    title: 'Irish Guinness',
    category: 'wines',
    price: '$26',
    tags: 'Lager beer, light-coloured, highly carbonated type of beer. The term lager is used to denote beer produced from bottom-fermenting yeast.',
    subTags: 'IE | 750 ml',
    specialMenu: 'true'
  },
  {
    title: 'Loveblock Marlborough Sauvignon Blanc',
    category: 'wines',
    price: '$20',
    tags: 'This Sauvignon Blanc is widely available and enjoyable, with aromas of freshly cut grass, notes of green bell pepper, and balanced acidity.',
    specialMenu: 'false'
  },
  {
    title: 'Weingut Prieler Johanneshöhe Blaufränkisch',
    category: 'wines',
    price: '$16',
    tags: 'A crowd-pleasing Austrian Blaufränkisch, this wine has good acidity and medium depth. It is juicy yet spicy, and is best enjoyed chilled.',
    specialMenu: 'false'
  },
  {
    title: 'Sottimano Mate',
    category: 'wines',
    price: '$17',
    tags: 'This sweet and spicy Brachetto is an incredible bang for your buck. It has a grip on the palate and smells like sweet desserts mixed with herbs.',
    subTags: 'CA | 750 ml',
    specialMenu: 'true'
  },
  {
    title: 'Treleaven Cabernet Franc',
    category: 'wines',
    price: '$56',
    tags: 'This wine from the Finger Lakes region has inviting cherry and soil aromas, and is vibrant and juicy on the palate.',
    specialMenu: 'false'
  },
  {
    title: 'Cristom Mt. Jefferson Cuvee Pinot Noir',
    category: 'wines',
    price: '$36',
    tags: 'This Pinot Noir is sure to please. It has density and lift, with great acidity and a rich fruit core.',
    specialMenu: 'false'
  },
  {
    title: 'Espectacle del Montsant',
    category: 'wines',
    price: '$110',
    tags: 'This Spanish offering is very balanced for having such high alcohol — 15.5 percent ABV, that is. It has intense black and blueberry flavors, with a slight waft of this varietys inherent orange peel aroma.',
    specialMenu: 'false'
  },
  {
    title: 'Alois Lageder Riff Pinot Grigio',
    category: 'wines',
    price: '$10',
    tags: 'This is a prime candidate for your new go-to, under-$20 Pinot Grigio. With its screw-cap bottle, ripe fruit aromas, and zippy flavor.',
    specialMenu: 'false'
  },
  {
    title: 'Ridgecrest Estate Grüner Veltliner',
    category: 'wines',
    price: '$24',
    tags: 'The Willamette Valley is so much more than a Pinot Noir region, and this Grüner Veltliner is proof of that. It has a subtle depth and lovely acidity, with aromas of citrus and pear.',
    specialMenu: 'false'
  },
  {
    title: 'Eberle Barbera',
    category: 'wines',
    price: '$36',
    tags: 'With its heavy oak influence, this is a fantastic wine for whiskey lovers. It has aromas of sweet pastries and fresh soil, subtle tannins, and a soft fruity center.',
    specialMenu: 'false'
  },
  {
    title: 'Adelaida Rosé',
    category: 'wines',
    price: '$28',
    tags: 'From Paso Robles, Calif., this rosé is complex and drinks like a red wine. Fruity aromas are offset by layers of dried herbs, while the wine grips the palate.',
    specialMenu: 'false'
  },
  {
    title: 'Jefferson Vineyards Cabernet Franc',
    category: 'wines',
    price: '$28',
    tags: 'This versatile Cabernet Franc is delicious both chilled and at room temperature. It has a soft, earthy fruit core and brambly blackberry aromas.',
    specialMenu: 'false'
  },
  {
    title: 'Château Peyrassol Côtes de Provence',
    category: 'wines',
    price: '$35',
    tags: 'White flowers and strawberries leap from the glass as you swirl and sniff (do it!). The palate is structured and slightly drying, yet still juicy, fruity, and refreshing. With additional flavors of wet rocks, white pepper, and red fruit.',
    specialMenu: 'false'
  },

  {
    title: 'Jack Daniels Bonded',
    category: 'whiskey',
    price: '$30',
    tags: '50% | Tennessee',
    specialMenu: 'false'
  },
  {
    title: 'Redbreast Kentucky Oak Edition',
    category: 'whiskey',
    price: '$95',
    tags: '50.5% | Ireland',
    specialMenu: 'false'
  },
  {
    title: 'Barrell Vantage',
    category: 'whiskey',
    price: '$90',
    tags: '57.22% | Indiana, Kentucky, and Tennessee',
    specialMenu: 'false'
  },
  {
    title: 'Dewars 12 year old',
    category: 'whiskey',
    price: '$30',
    tags: '40% | Scotland',
    specialMenu: 'false'
  },
  {
    title: 'Westward Cask Strength',
    category: 'whiskey',
    price: '$100',
    tags: '62.5% | Oregon',
    specialMenu: 'false'
  },
  {
    title: 'Midleton Very Rare (2022)',
    category: 'whiskey',
    price: '$200',
    tags: '40% | Ireland',
    specialMenu: 'false'
  },
  {
    title: 'Blue Note Juke Joint Uncut',
    category: 'whiskey',
    price: '$45',
    tags: '58.65% | Kentucky',
    specialMenu: 'false'
  },
  {
    title: 'Limavady Single Barrel (0039)',
    category: 'whiskey',
    price: '$50',
    tags: '46% | Ireland',
    specialMenu: 'false'
  },
  {
    title: 'Bruichladdich 8 year old Islay Barley',
    category: 'whiskey',
    price: '$75',
    tags: '50% | Scotland (Islay)',
    specialMenu: 'false'
  },
  {
    title: 'Nelson Bros. Reserve',
    category: 'whiskey',
    price: '$60',
    tags: '53.9% | Indiana, Kentucky, and Tennessee',
    specialMenu: 'false'
  },
  {
    title: 'Sweetens Cove Kennessee Maplewood',
    category: 'whiskey',
    price: '$60',
    tags: '55.35% | Kentucky and Tennessee',
    specialMenu: 'false'
  },
  {
    title: 'Tomintoul Cigar Malt Oloroso Sherry',
    category: 'whiskey',
    price: '$130',
    tags: '43% | Scotland (Speyside)',
    specialMenu: 'false'
  },
  {
    title: 'Miyagikyo Peated',
    category: 'whiskey',
    price: '$275',
    tags: '48% | Japan',
    specialMenu: 'false'
  },
  {
    title: 'Blackened Rye Lightning Double',
    category: 'whiskey',
    price: '$70',
    tags: '45% | Kentucky',
    specialMenu: 'false'
  },
  {
    title: 'Bardstown Bourbon',
    category: 'whiskey',
    price: '$160',
    tags: '52% | Tennessee',
    specialMenu: 'false'
  },
  {
    title: 'Bushmills 12 year old',
    category: 'whiskey',
    price: '$60',
    tags: '40% | Ireland',
    specialMenu: 'false'
  },
  {
    title: 'Indri Trini The Three Wood',
    category: 'whiskey',
    price: '$60',
    tags: '46% | India',
    specialMenu: 'false'
  },
  {
    title: 'Hardins Creek James B. Beam',
    category: 'whiskey',
    price: '$80',
    tags: '54% | Kentucky',
    specialMenu: 'false'
  },
  {
    title: 'Virgin Chinkapin Oak',
    category: 'whiskey',
    price: '$100',
    tags: '50% | Ireland',
    specialMenu: 'false'
  },
  {
    title: 'Craigellachie Bas Armagnac Finished',
    category: 'whiskey',
    price: '$65',
    tags: '46% | Scotland (Speyside)',
    specialMenu: 'false'
  },

  {
    title: 'California Common',
    category: 'beers',
    price: '$20',
    tags: 'California common is a hybrid beer style that is brewed with lager yeast but is then fermented at ale temperatures.',
    specialMenu: 'false'
  },
  {
    title: 'Weissbier',
    category: 'beers',
    price: '$35',
    tags: 'Weissbier is a classic Bavarian wheat ale that is top-fermented and characterized by its mousse-like foam and cloudy appearance.',
    specialMenu: 'false'
  },
  {
    title: 'Trappist Beer',
    category: 'beers',
    price: '$15',
    tags: 'Trappist is a particular category of beers, or more precisely an indication of origin, which includes various styles that are brewed in Trappist monasteries.',
    specialMenu: 'false'
  },
  {
    title: 'Tripel',
    category: 'beers',
    price: '$20',
    tags: 'Belgian-style tripel is an approachable and easy-drinking beer style with high carbonation and complex flavors. They traditionally have high alcohol content, falling between a 7 to 10% ABV range.',
    specialMenu: 'false'
  },
  {
    title: 'Imperial Stout',
    category: 'beers',
    price: '$65',
    tags: 'They are full-bodied, rich, complex, and intense with typical flavors of roasted malt, dark and dried fruit, chocolate, and coffee.',
    specialMenu: 'false'
  },
  {
    title: 'Dubbel',
    category: 'beers',
    price: '$38',
    tags: 'Belgian dubbel will get its flavor from candi sugar—a thick and dark caramelized syrup that is added to the wort.',
    specialMenu: 'false'
  },
  {
    title: 'Witbier',
    category: 'beers',
    price: '$50',
    tags: 'The aromas include a layered combination of herbs, spices, and subtle fruity nuances.',
    specialMenu: 'false'
  },
  {
    title: 'Corona',
    category: 'beers',
    price: '$30',
    tags: 'The drink was introduced in 1925, and it is bottled at 4.6% ABV. Corona is usually served with a lime wedge tucked inside the neck of the bottle.',
    specialMenu: 'false'
  },
  {
    title: 'Kölsch',
    category: 'beers',
    price: '$15',
    tags: 'They specify that true Kölsch beer is a pale yellow, clear, highly fermented, fully-rounded ale.',
    specialMenu: 'false'
  },
  {
    title: 'Irish Dry Stout',
    category: 'beers',
    price: '$70',
    tags: 'Irish dry stouts will have flavors of roasted grain or malt, while the aromas are usually reminiscent of coffee, with possible hints of chocolate or cocoa.',
    specialMenu: 'false'
  },
  {
    title: 'American Pale Ale',
    category: 'beers',
    price: '$30',
    tags: 'The use of American hops, primarily Cascade, will give these beers distinctive citrus and piney aromas. Their color may range from dark gold to amber and copper.',
    specialMenu: 'false'
  },
  {
    title: 'Rauchbier',
    category: 'beers',
    price: '$45',
    tags: 'These amber lagers are usually clean and clear with medium hop bitterness, while the aromas and flavors include a combination of smoke and malt.',
    specialMenu: 'false'
  },
  {
    title: 'Sweet Stout',
    category: 'beers',
    price: '$35',
    tags: 'They are smooth and creamy, with medium hop bitterness, while their malty character is well-balanced with medium to high sweetness.',
    specialMenu: 'false'
  },
  {
    title: 'German Pilsner',
    category: 'beers',
    price: '$48',
    tags: 'It is brewed from barley malt, and it typically has a flowery, herbal, and spicy hop bitterness that is balanced with a moderately malty backbone.',
    specialMenu: 'false'
  },
  {
    title: 'Scotch Ale',
    category: 'beers',
    price: '$32',
    tags: 'Scotch ale is a beer style distinguished for its malty character and rich caramel flavors.',
    specialMenu: 'false'
  },
  {
    title: 'Amber Ale',
    category: 'beers',
    price: '$26',
    tags: 'They are characterized by moderate to strong malt sweetness, while the use of American hops occasionally provides for citrusy and piney aromas.',
    specialMenu: 'false'
  },
  {
    title: 'Blonde Ale',
    category: 'beers',
    price: '$27',
    tags: 'These beers range from pale yellow to golden, and they are characterized by malt sweetness, toasty and bready aromas, medium body, and low to moderate hop character.',
    specialMenu: 'false'
  },
  {
    title: 'Cask Ale',
    category: 'beers',
    price: '$36',
    tags: 'Cask ale, also known as real ale, is a traditional type of beer made with natural ingredients and served directly from the vessel in which it was fermented.',
    specialMenu: 'false'
  },
  {
    title: 'Cream Ale',
    category: 'beers',
    price: '$75',
    tags: 'These light and easy-drinking beers were fermented at slightly lower temperatures with ale or lager yeast.',
    specialMenu: 'false'
  },
  {
    title: 'Weizenbock',
    category: 'beers',
    price: '$45',
    tags: 'Weizenbock was supposed to be a middle-ground between the rich and malty doppelbock and wheat beer (weissbier).',
    specialMenu: 'false'
  },

  {
    title: 'Dom Pérignon',
    category: 'champagne',
    price: '$3100',
    tags: ' Moët & Chandon produces this prestige cuvée, only using single-year harvested grapes and letting them sit on the lees for at least eight years. Each bottle also contains a mix of only Pinot Noir and Chardonnay grapes.',
    specialMenu: 'false'
  },
  {
    title: 'Veuve Clicquot',
    category: 'champagne',
    price: '$1500',
    tags: 'The most recognizable Champagne in the collection is the signature Brut Yellow Label, with wines blended from 50 to 60 crus and aged for a minimum of three years. A Rosé, an Extra Brut Extra Old, a Demi-Sec, La Grande Dame, and various vintages.',
    specialMenu: 'false'
  },
  {
    title: 'Louis Roederer',
    category: 'champagne',
    price: '$2200',
    tags: 'The signature blend, and Carte Blanche, a similar mix but with higher dosage for added sweetness. While these are great non-vintage Champagnes, there are vintages under the label other than Cristal.',
    specialMenu: 'false'
  },
  {
    title: 'Cristal',
    category: 'champagne',
    price: '$2400',
    tags: 'It contains grapes from 45 crus, across three terroirs including la Vallée de la Marne, la Montagne de Reims, and la Côte des Blancs. The result is a powerful and complex Champagne with notes of mirabelle plum, nectarine, candied orange, and roasted hazelnuts.',
    specialMenu: 'false'
  },
  {
    title: 'Krug',
    category: 'champagne',
    price: '$1600',
    tags: 'Each comes from small, walled plots in the heart of their respective villages. Krug Grande Cuvée is the annual release and blends over 120 wines from at least ten different years to recreate Josephs original dream. Krug Vintage is a collection of wine stories, year by year.',
    specialMenu: 'false'
  },
  {
    title: 'Moët & Chandon',
    category: 'champagne',
    price: '$4200',
    tags: 'Non-vintage expressions include Moët Impérial, with a vibrant bouquet and tasting notes of apple and peach, and the romantic Moët Rosé with gooseberries, raspberry, and wild strawberries.',
    specialMenu: 'false'
  },
  {
    title: 'Taittinger',
    category: 'champagne',
    price: '$2700',
    tags: 'The Comtes de Champagne Blanc de Blancs is the most famous Taittinger expression and is always a vintage reflecting the most exceptional harvests from the five Grand Cru villages. The Brut Réserve has tasting notes of fresh fruit and honey, while the Folies de la Marquetterie is a terroir Champagne.',
    specialMenu: 'false'
  },
  {
    title: 'Armand De Brignac',
    category: 'champagne',
    price: '$1800',
    tags: 'A multi-vintage style, with a 40/40/20 combination of Pinot Noir, Chardonnay, and Pinot Meunier. Cherries, exotic fruits, and a touch of lemon, honey, and vanilla appear on the palate.',
    specialMenu: 'false'
  },
  {
    title: 'G.H. Mumm',
    category: 'champagne',
    price: '$3200',
    tags: 'Cordon Rouge is the iconic Cuvée, blended from 120 crus for a fresh, vibrant style. Meanwhile, the Grand Cordon Rosé has the sweetness of red berries, with a long bright finish.',
    specialMenu: 'false'
  },
  {
    title: 'Laurent-Perrier',
    category: 'champagne',
    price: '$1800',
    tags: 'The Ultra Brut is a pioneer in the zero-dosage category, with no added sugar, while the Blanc de Blancs Nature is 100% Chardonnay from Coteaux de la Montagne de Reims and the Côte des Blancs.',
    specialMenu: 'false'
  },
  {
    title: 'Mod Sélection',
    category: 'champagne',
    price: '$1500',
    tags: 'The collection starts with the Reserve, featuring layers of lively aromatics and vibrant white fruit. Next, the Rosé uses a proprietary cold-soak maceration, resulting in a luscious red-fruit palate and extra-fine mousse.',
    specialMenu: 'false'
  },
  {
    title: 'Ruinart',
    category: 'champagne',
    price: '$3000',
    tags: 'The core selection is a Blanc de Blancs and a Rosé. The former uses 100 percent Chardonnay, resulting in fruity and floral notes on the nose. The rosé is 45/55 split of Chardonnay and Pinot Noir from the Montagne de Reims and the Vallée de la Marne vineyards.',
    specialMenu: 'false'
  },
  {
    title: 'Le Chemin Du Roi',
    category: 'champagne',
    price: '$2500',
    tags: 'Blanc de Blancs, part of the exclusive Collection Privée. It spends ten years aging before disgorgement for a robust and complex flavor with hints of toasted brioche, Meyer lemon, creamy pineapple, and balanced minerality.',
    specialMenu: 'false'
  },
  {
    title: 'Piper-Heidsieck',
    category: 'champagne',
    price: '$1000',
    tags: 'This NVs include a Cuvée Brut, Rosé Sauvage, Cuvée Sublime, Riviera, and Essential. The Cuvée Brut is the signature drop, with Pinot Noir the dominant grape; its seductive, precise, and bright.',
    specialMenu: 'false'
  },
  {
    title: 'Billecart-Salmon',
    category: 'champagne',
    price: '$3000',
    tags: 'Brut Rosé, which is full of romance, with an elegant flavor and raspberry finish, and the Cuvée Elisabeth Salmon 2008 vintage, a unique and sensorial experience.',
    specialMenu: 'false'
  },
  {
    title: 'Moët & Chandon',
    category: 'champagne',
    price: '$4200',
    tags: 'Non-vintage expressions include Moët Impérial, with a vibrant bouquet and tasting notes of apple and peach, and the romantic Moët Rosé with gooseberries, raspberry, and wild strawberries.',
    specialMenu: 'false'
  },

  {
    title: 'Patrón Silver Tequila',
    category: 'tequila',
    price: '$65',
    tags: 'It has a citrus aroma, a light pepper finish, and is made in Jalisco, Mexico.',
    specialMenu: 'false'
  },
  {
    title: 'Casa Noble Tequila',
    category: 'tequila',
    price: '$45',
    tags: 'It is organic-certified, is an award-winning blend, and is perfect for any occasion.',
    specialMenu: 'false'
  },
  {
    title: 'Casamigos Blanco Tequila',
    category: 'tequila',
    price: '$20',
    tags: 'Celeb-approved, made in the Jalisco highlands, and is made from 100% agave.',
    specialMenu: 'false'
  },
  {
    title: 'Don Julio Tequila',
    category: 'tequila',
    price: '$38',
    tags: 'Several delicious expressions available, has unique flavor profiles, and offers special releases like Double Cash or Private Cask.',
    specialMenu: 'false'
  },
  {
    title: 'LALO Tequila',
    category: 'tequila',
    price: '$23',
    tags: 'Premium Blanco tequila, made with the finest ingredients, and has notes of cinnamon and dulce de leche.',
    specialMenu: 'false'
  },
  {
    title: 'El Tesoro Tequila',
    category: 'tequila',
    price: '$30',
    tags: 'A history that dates to the 1930s, flavors that range from sweet to savory, and the specialty El Tesoro Paradiso.',
    specialMenu: 'false'
  },
  {
    title: 'Santo Mezquila Tequila',
    category: 'tequila',
    price: '$45',
    tags: 'High-end “old school” mezcal made from 100% Blue Weber agave and distilled using traditional methods.',
    specialMenu: 'false'
  },
  {
    title: 'Código 1530 Rosa Tequila',
    category: 'tequila',
    price: '$65',
    tags: 'Made in Los Bajos, Mexico, uses traditional techniques, and aged in French White Oak red wine barrels.',
    specialMenu: 'false'
  },
  {
    title: 'OCHO Tequila',
    category: 'tequila',
    price: '$36',
    tags: 'Made in Jalisco, Mexico, it uses an old-fashioned, slower style method, and has several varieties and distinctive labeling.',
    specialMenu: 'false'
  },
  {
    title: 'Milagro Tequila',
    category: 'tequila',
    price: '$25',
    tags: 'Smooth, refined, made with the finest blue agave, and aged in American and French oak barrels.',
    specialMenu: 'false'
  },
  {
    title: 'Espolòn Tequila',
    category: 'tequila',
    price: '$25',
    tags: 'Made with only the finest ingredients, smooth and delicious, and is premium but affordable.',
    specialMenu: 'false'
  },
  {
    title: 'Chamucos Blanco Tequila',
    category: 'tequila',
    price: '$18',
    tags: 'Handcrafted in small batches, has just the right amount of spice, and a hint of earthiness.',
    specialMenu: 'false'
  },
  {
    title: 'Fortaleza Tequila',
    category: 'tequila',
    price: '$28',
    tags: 'Made with traditional methods, using the finest ingredients, and offers a range of amazing tequilas.',
    specialMenu: 'false'
  },
  {
    title: 'Cenote Blanco Tequila',
    category: 'tequila',
    price: '$43',
    tags: 'Made from naturally filtered water, aged in oak barrels for three weeks, and has notes of citrus, greens, and pepper.',
    specialMenu: 'false'
  },
  {
    title: 'Pasote tequila',
    category: 'tequila',
    price: '$30',
    tags: 'Uses only the finest ingredients, has a variety of expressions, and is free from any additives.',
    specialMenu: 'false'
  },
  {
    title: 'Teremana Tequila',
    category: 'tequila',
    price: '$55',
    tags: 'Distilled in handmade copper pot stills, is made in small batches, and has a rich aroma and clean finish.',
    specialMenu: 'false'
  },
  {
    title: 'El Bandido Yankee Tequila',
    category: 'tequila',
    price: '$38',
    tags: 'Ultra-premium and ultra-smooth, has notes of pepper and vanilla, and hints of citrus.',
    specialMenu: 'false'
  },
  {
    title: 'Hornitos Plata Tequila',
    category: 'tequila',
    price: '$15',
    tags: 'Smooth and citrusy, made with only the finest agave, and is perfect on its own or in a mixed drink.',
    specialMenu: 'false'
  },

  {
    title: 'Aperol Sprtiz',
    category: 'cocktails',
    price: '$20',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
    subTags: 'Aperol | Villa Marchesi | soda | 30 ml',
    specialMenu: 'true'
  },
  {
    title: "Dark 'N' Stormy",
    category: 'cocktails',
    price: '$16',
    tags: 'Dark rum | Ginger beer | Slice of lime',
    subTags: 'Dark rum | Ginger beer | Lime',
    specialMenu: 'true'
  },
  {
    title: 'Daiquiri',
    category: 'cocktails',
    price: '$25',
    tags: 'Rum | Citrus juice | Sugar',
    specialMenu: 'false'
  },
  {
    title: 'Old Fashioned',
    category: 'cocktails',
    price: '$31',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
    specialMenu: 'false'
  },
  {
    title: 'Negroni',
    category: 'cocktails',
    price: '$26',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
    specialMenu: 'false'
  },
  {
    title: 'Mojito',
    category: 'cocktails',
    price: '$10',
    tags: 'White Rum | Lime juice | Mint | Soda',
    specialMenu: 'false'
  },
  {
    title: 'Tom Collins',
    category: 'cocktails',
    price: '$25',
    tags: 'Gin | Rasberries | Brandy | Elderflower Cordial',
    specialMenu: 'false'
  },
  {
    title: 'Piña Colada',
    category: 'cocktails',
    price: '$12',
    tags: 'Coconut | Pineapple',
    specialMenu: 'false'
  },
  {
    title: 'Classic Negroni',
    category: 'cocktails',
    price: '$20',
    tags: 'Gin | Sweet Vermouth | Orange garnish',
    specialMenu: 'false'
  },
  {
    title: 'Piña Colada',
    category: 'cocktails',
    price: '$12',
    tags: 'Coconut | Pineapple',
    specialMenu: 'false'
  },
  {
    title: 'Classic Negroni',
    category: 'cocktails',
    price: '$20',
    tags: 'Gin | Sweet Vermouth | Orange garnish',
    specialMenu: 'false'
  },
  {
    title: 'Martini',
    category: 'cocktails',
    price: '$30',
    tags: 'Gin | Vodka | Dry Vermouth | Olive garnish',
    specialMenu: 'false'
  },
  {
    title: 'Whiskey sour',
    category: 'cocktails',
    price: '$40',
    tags: 'Bourbon | Sharp lemon | Herby bitters',
    specialMenu: 'false'
  },
  {
    title: 'White Russian',
    category: 'cocktails',
    price: '$30',
    tags: 'Vodka | Fresh cream | Coffee liqueur',
    specialMenu: 'false'
  },
  {
    title: 'Classic Margarita',
    category: 'cocktails',
    price: '$15',
    tags: 'Tequila | Lime & Salt garnish',
    subTags: 'Tequila | Lime & Salt garnish',
    specialMenu: 'true'
  },
  {
    title: 'Gin fizz',
    category: 'cocktails',
    price: '$40',
    tags: 'Gin | Sparkling water | Lemon slice | Egg white',
    specialMenu: 'false'
  },
  {
    title: 'Cuba libre',
    category: 'cocktails',
    price: '$35',
    tags: 'Rum | Cola | Lime juice',
    specialMenu: 'false'
  },
  {
    title: 'Gimlet',
    category: 'cocktails',
    price: '$10',
    tags: 'Lime syrup | Edible flower garnish',
    specialMenu: 'false'
  },
  {
    title: 'Irish Coffee',
    category: 'cocktails',
    price: '$20',
    tags: 'Whiskey | Cold cream | Hot sweet coffee',
    specialMenu: 'false'
  },
  {
    title: 'Old Cuban',
    category: 'cocktails',
    price: '$40',
    tags: 'Aged Rum | Mint leaves | Lime juice | Champagne floater',
    specialMenu: 'false'
  },
  {
    title: 'Bloody Mary',
    category: 'cocktails',
    price: '$40',
    tags: 'Vodka | Tomato juice | Spices | Olive garnish',
    specialMenu: 'false'
  },
  {
    title: 'Tequila Sunrise',
    category: 'cocktails',
    price: '$30',
    tags: 'Tequila | Grenadine syrup',
    subTags: 'Tequila | Grenadine syrup',
    specialMenu: 'true'
  },
  {
    title: 'Piña Colada',
    category: 'cocktails',
    price: '$12',
    tags: 'Coconut | Pineapple',
    specialMenu: 'false'
  },
  {
    title: 'Classic Negroni',
    category: 'cocktails',
    price: '$20',
    tags: 'Gin | Sweet Vermouth | Orange garnish',
    specialMenu: 'false'
  },
  {
    title: 'Old Fashioned',
    category: 'cocktails',
    price: '$31',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
    specialMenu: 'false'
  },
  {
    title: 'Negroni',
    category: 'cocktails',
    price: '$26',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
    specialMenu: 'false'
  },
  {
    title: 'Mojito',
    category: 'cocktails',
    price: '$10',
    tags: 'White Rum | Lime juice | Mint | Soda',
    subTags: 'White Rum | Lime juice | Mint | Soda',
    specialMenu: 'true'
  },
  {
    title: 'Tom Collins',
    category: 'cocktails',
    price: '$25',
    tags: 'Gin | Rasberries | Brandy | Elderflower Cordial',
    specialMenu: 'false'
  },
  {
    title: 'Piña Colada',
    category: 'cocktails',
    price: '$12',
    tags: 'Coconut | Pineapple',
    specialMenu: 'false'
  },
  {
    title: 'Classic Negroni',
    category: 'cocktails',
    price: '$20',
    tags: 'Gin | Sweet Vermouth | Orange garnish',
    specialMenu: 'false'
  },

  {
    title: 'The ABC',
    category: 'shots',
    price: '$40',
    tags: '1/3 Bacardi | 1/3 Chartreuse | 1/3 absinthe',
    specialMenu: 'false'
  },
  {
    title: 'Alabama Slammer',
    category: 'shots',
    price: '$12',
    tags: '1/3 amaretto liqueur | 1/3 sloe gin | 2/3 Peach schnapps liqueur',
    specialMenu: 'false'
  },
  {
    title: 'Black Russian',
    category: 'shots',
    price: '$20',
    tags: '1/3 shot Vodka | 2/3 shot Kahlua coffee liqueur',
    specialMenu: 'false'
  },
  {
    title: 'Blue Hawaiian',
    category: 'shots',
    price: '$10',
    tags: '1/3 shot Vodka | 1/3 shot blue curacao liqueur | 1/3 coconut cream',
    specialMenu: 'false'
  },
  {
    title: 'Chocolate Martini',
    category: 'shots',
    price: '$30',
    tags: '1 part vodka | 2 parts white crème de cacao liqueur | 1/2 teaspoon grated dark chocolate',
    specialMenu: 'true'
  },
  {
    title: 'Cranberry Margarita',
    category: 'shots',
    price: '$20',
    tags: '1 part tequila | 2 parts sweet and sour mix | 1/4 cup cranberry juice',
    specialMenu: 'false'
  },
  {
    title: 'Hand Grenade',
    category: 'shots',
    price: '$15',
    tags: '1 part white rum | 1 part rum (Jaegermeister) | 1/2 can Red Bull energy drink',
    specialMenu: 'false'
  },
  {
    title: 'Lemon Drop Shot',
    category: 'shots',
    price: '$38',
    tags: '1/2 shot fresh lime juice | 1/8 shot simple syrup | 1/8 shot vodka',
    specialMenu: 'false'
  },
  {
    title: 'Mudslide',
    category: 'shots',
    price: '$32',
    tags: '1 part coffee liqueur | 2 parts Irish cream liqueur | 1/4 cup whipped flavored cream vodka',
    specialMenu: 'false'
  },
  {
    title: 'Kamikaze',
    category: 'shots',
    price: '$12',
    tags: '1 part vodka | 1/2 part triple sec liqueur | 2 parts fresh lime juice | 3 parts sweet-and-sour mix',
    specialMenu: 'false'
  },
  {
    title: 'Cognac Milk Punch',
    category: 'shots',
    price: '$18',
    tags: '1/8 shot sugar syrup | 3 parts cognac | 4 parts milk',
    specialMenu: 'false'
  },
  {
    title: 'Whiskey Sour Punch',
    category: 'shots',
    price: '$20',
    tags: '3 parts Irish Whiskey Sour mix | 1 part lime-lemon juice soda',
    specialMenu: 'false'
  },
  {
    title: 'Flatliner',
    category: 'shots',
    price: '$10',
    tags: '1/2 shot sambuca | 1/2 tequila | 4-6 drops of Tabasco',
    specialMenu: 'false'
  },
  {
    title: 'Shamrock Shooter',
    category: 'shots',
    price: '$20',
    tags: '3/4 shot Irish Cream | 3/4 shot Midori',
    specialMenu: 'false'
  },
  {
    title: 'Burnt Almond Shooter',
    category: 'shots',
    price: '$50',
    tags: '1 part amaretto | 1 part light cream',
    specialMenu: 'false'
  },
  {
    title: 'Scorpion Shot',
    category: 'shots',
    price: '$30',
    tags: '1 part rum | 1 part gin | 1/2 part vodka | 1/2 part tequila | 1/2 part triple sec | 5 parts orange juice',
    specialMenu: 'false'
  },
  {
    title: 'Black Russian',
    category: 'shots',
    price: '$20',
    tags: '1/3 shot Vodka | 2/3 shot Kahlua coffee liqueur',
    specialMenu: 'false'
  },
  {
    title: 'Blue Hawaiian',
    category: 'shots',
    price: '$10',
    tags: '1/3 shot Vodka | 1/3 shot blue curacao liqueur | 1/3 coconut cream',
    specialMenu: 'false'
  },
  {
    title: 'Chocolate Martini',
    category: 'shots',
    price: '$30',
    tags: '1 part vodka | 2 parts white crème de cacao liqueur | 1/2 teaspoon grated dark chocolate',
    specialMenu: 'true'
  },
  {
    title: 'Whiskey Sour Punch',
    category: 'shots',
    price: '$20',
    tags: '3 parts Irish Whiskey Sour mix | 1 part lime-lemon juice soda',
    specialMenu: 'false'
  },
  {
    title: 'Flatliner',
    category: 'shots',
    price: '$10',
    tags: '1/2 shot sambuca | 1/2 tequila | 4-6 drops of Tabasco',
    specialMenu: 'false'
  },
  {
    title: 'Cranberry Margarita',
    category: 'shots',
    price: '$20',
    tags: '1 part tequila | 2 parts sweet and sour mix | 1/4 cup cranberry juice',
    specialMenu: 'false'
  },
  {
    title: 'Hand Grenade',
    category: 'shots',
    price: '$15',
    tags: '1 part white rum | 1 part rum (Jaegermeister) | 1/2 can Red Bull energy drink',
    specialMenu: 'false'
  },
  {
    title: 'Lemon Drop Shot',
    category: 'shots',
    price: '$38',
    tags: '1/2 shot fresh lime juice | 1/8 shot simple syrup | 1/8 shot vodka',
    specialMenu: 'false'
  },

  {
    title: 'Coca-Cola Classic',
    category: 'beverages',
    price: '$10',
    tags: '34mg Caffine | 140 Calories | 12 fl oz per size',
    specialMenu: 'false'
  },
  {
    title: 'Pepsi',
    category: 'beverages',
    price: '$10',
    tags: ' 38mg Caffine | 150 Calories | 12 fl oz per size',
    specialMenu: 'false'
  },
  {
    title: 'Diet Coke',
    category: 'beverages',
    price: '$20',
    tags: ' 46mg Caffine | 0 Calories | 12 fl oz per size',
    specialMenu: 'false'
  },
  {
    title: 'Dr Pepper',
    category: 'beverages',
    price: '$25',
    tags: ' 42mg Caffine | 150 Calories | 12 fl oz per size',
    specialMenu: 'false'
  },
  {
    title: 'Mountain Dew',
    category: 'beverages',
    price: '$15',
    tags: ' 54mg Caffine | 170 Calories | 12 fl oz per size',
    specialMenu: 'false'
  },
  {
    title: 'Sprite',
    category: 'beverages',
    price: '$10',
    tags: '34mg Caffine | 140 Calories | 12 fl oz per size',
    specialMenu: 'false'
  },
  {
    title: 'Diet Pepsi',
    category: 'beverages',
    price: '$10',
    tags: ' 38mg Caffine | 0 Calories | 12 fl oz per size',
    specialMenu: 'false'
  },
  {
    title: 'Coke Zero',
    category: 'beverages',
    price: '$20',
    tags: ' 46mg Caffine | 0 Calories | 12 fl oz per size',
    specialMenu: 'false'
  },
  {
    title: 'Fanta',
    category: 'beverages',
    price: '$25',
    tags: ' 42mg Caffine | 150 Calories | 12 fl oz per size',
    specialMenu: 'false'
  },
  {
    title: 'Powerade',
    category: 'beverages',
    price: '$15',
    tags: ' 54mg Caffine | 0 Calories | 12 fl oz per size',
    specialMenu: 'false'
  },
  {
    title: 'Minute Maid',
    category: 'beverages',
    price: '$10',
    tags: '34mg Caffine | 140 Calories | 12 fl oz per size',
    specialMenu: 'false'
  },
  {
    title: 'Gatorade',
    category: 'beverages',
    price: '$20',
    tags: ' 46mg Caffine | 0 Calories | 12 fl oz per size',
    specialMenu: 'false'
  },
  {
    title: 'Red Bull',
    category: 'beverages',
    price: '$25',
    tags: ' 42mg Caffine | 150 Calories | 12 fl oz per size',
    specialMenu: 'false'
  },
  {
    title: 'Lipton',
    category: 'beverages',
    price: '$15',
    tags: ' 54mg Caffine | 170 Calories | 12 fl oz per size',
    specialMenu: 'false'
  },
  {
    title: 'Tea',
    category: 'beverages',
    price: '$10',
    tags: '34mg Caffine | 140 Calories | 12 fl oz per size',
    specialMenu: 'false'
  },
  {
    title: 'Hot Chocolate',
    category: 'beverages',
    price: '$10',
    tags: ' 38mg Caffine | 150 Calories | 12 fl oz per size',
    specialMenu: 'false'
  },
  {
    title: 'Hot Apple Cider',
    category: 'beverages',
    price: '$20',
    tags: ' 46mg Caffine | 0 Calories | 12 fl oz per size',
    specialMenu: 'false'
  },
  {
    title: 'Mulled Wine',
    category: 'beverages',
    price: '$25',
    tags: ' 42mg Caffine | 150 Calories | 12 fl oz per size',
    specialMenu: 'false'
  },
  {
    title: 'Hot Buttered Rum',
    category: 'beverages',
    price: '$15',
    tags: ' 54mg Caffine | 170 Calories | 12 fl oz per size',
    specialMenu: 'false'
  },
  {
    title: 'Espresso Hot Chocolate',
    category: 'beverages',
    price: '$10',
    tags: '34mg Caffine | 140 Calories | 12 fl oz per size',
    specialMenu: 'false'
  },
  {
    title: 'Caramel Latte',
    category: 'beverages',
    price: '$10',
    tags: ' 38mg Caffine | 0 Calories | 12 fl oz per size',
    specialMenu: 'false'
  },
  {
    title: 'Cafe au Lait',
    category: 'beverages',
    price: '$20',
    tags: ' 46mg Caffine | 0 Calories | 12 fl oz per size',
    specialMenu: 'false'
  },
  {
    title: 'Mocha',
    category: 'beverages',
    price: '$25',
    tags: ' 42mg Caffine | 150 Calories | 12 fl oz per size',
    specialMenu: 'false'
  },
  {
    title: 'Peppermint Hot Chocolate',
    category: 'beverages',
    price: '$15',
    tags: ' 54mg Caffine | 0 Calories | 12 fl oz per size',
    specialMenu: 'false'
  },
  {
    title: 'Masala Chai',
    category: 'beverages',
    price: '$10',
    tags: '34mg Caffine | 140 Calories | 12 fl oz per size',
    specialMenu: 'false'
  },
  {
    title: 'Pumpkin Spice Latte',
    category: 'beverages',
    price: '$20',
    tags: ' 46mg Caffine | 0 Calories | 12 fl oz per size',
    specialMenu: 'false'
  },
  {
    title: 'Matcha Latte',
    category: 'beverages',
    price: '$10',
    tags: ' 38mg Caffine | 0 Calories | 12 fl oz per size',
    specialMenu: 'false'
  },
  {
    title: 'Hot Lemonade',
    category: 'beverages',
    price: '$20',
    tags: ' 46mg Caffine | 0 Calories | 12 fl oz per size',
    specialMenu: 'false'
  },
  {
    title: 'Irish Coffee',
    category: 'beverages',
    price: '$25',
    tags: ' 42mg Caffine | 150 Calories | 12 fl oz per size',
    specialMenu: 'false'
  },
  {
    title: 'Spiced Cherry Cider',
    category: 'beverages',
    price: '$15',
    tags: ' 54mg Caffine | 0 Calories | 12 fl oz per size',
    specialMenu: 'false'
  },
  {
    title: 'Fresh Ginger Tea',
    category: 'beverages',
    price: '$10',
    tags: '34mg Caffine | 140 Calories | 12 fl oz per size',
    specialMenu: 'false'
  },
  {
    title: 'Golden Milk Turmeric Latte',
    category: 'beverages',
    price: '$20',
    tags: ' 46mg Caffine | 0 Calories | 12 fl oz per size',
    specialMenu: 'false'
  }
];



const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  }
];



const customers = [
  {
    name: 'Wade Warren',
    designation: 'Sommelier',
    feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.'
  },
  {
    name: 'Jane Cooper',
    designation: 'Chef',
    feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.'
  },
  {
    name: 'Brooklyn Ash',
    designation: 'Caterer',
    feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.'
  },
  {
    name: 'Robert Fox',
    designation: 'Chef',
    feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.'
  }
];



const blogs = [
  {
    recipe: "Cinnamon Roll",
    author: "Robert Scott",
    date: "21st May, 2018",
    title: "Vegan Gluten-Free Cinnamon Rolls",
    description: "Amazing fluffy and tender vegan, gluten-free cinnamon rolls! Just 10 ingredients and simple methods required for these insanely flavorful and delicious rolls!",
    render: "false"
  },
  {
    recipe: "Frappuccino",
    author: "William Dennis",
    date: "11th April, 2019",
    title: "Cold Brew Caramel Frappuccino",
    description: "Creamy, caffeine-packed caramel frappuccino made with just 3 ingredients and naturally sweetened with date caramel. The perfect dairy-free morning.",
    render: "false"
  },
  {
    recipe: "Blueberry Scone",
    author: "Stacy Charles",
    date: "07th July, 2021",
    title: "Blueberry Gluten-Free Scones",
    description: "Gluten-free scones that are tender on the inside, crispy on the outside, flaky, and infused with wild blueberries! Just 10 ingredients and simple methods required!",
    render: "true"
  },
  {
    recipe: "Donut",
    author: "Rahul Sinha",
    date: "01st August, 2021",
    title: "Vegan Dark Chocolate Donuts",
    description: "Fluffy, baked chocolate cake donuts made in 30 minutes! Gluten-free, perfectly sweet, and topped with a simple coconut oil glaze. The perfect sweet treat for you!",
    render: "false"
  },
  {
    recipe: "Oats",
    author: "Sarah J.",
    date: "03rd October, 2021",
    title: "Cranberry Pumpkin Steel Cut Oats",
    description: "Warm, comforting bowls of oats made with cranberries, pumpkin, and spices. Gluten-free, plant-based, rich in antioxidants, and ready in just 25 minutes!",
    render: "false"
  },
  {
    recipe: "Muffin",
    author: "Mark Tom",
    date: "15th January, 2022",
    title: "Almond Butter SweetPotato Muffins",
    description: "Incredibly fluffy, wholesome sweet potato muffins that are naturally sweetened, gluten-free, and swirled with roasted almond butter. The perfect sweet treat.",
    render: "false"
  },
  {
    recipe: "Granola",
    author: "Michelle Kate",
    date: "23rd March, 2022",
    title: "Gingerbread Flavored Granola",
    description: "10-ingredient, 30-minute gingerbread granola sweetened with molasses and tossed with cinnamon, ginger, and cloves for that perfect gingerbread flavor.",
    render: "false"
  },
  {
    recipe: "Waffles",
    author: "Donald J.",
    date: "20th April, 2022",
    title: "Chocolate Chip Banana Waffles",
    description: "These vegan, gluten-free waffles have the crispy texture and sweet flavor of banana bread studded with chocolate chips. Enjoy this as a lazy weekend treat.",
    render: "false"
  },
  {
    recipe: "Macadamia Pancake",
    author: "Lisa James",
    date: "27th April, 2022",
    title: "Macadamia Chocolate Pancakes",
    description: "Fluffy vegan pancakes with all the flavor of a white chocolate macadamia nut cookie. Topped with a simple coconut oil glaze. The perfect sweet treat for you!",
    render: "false"
  },
  {
    recipe: "Oatmeal Cookie",
    author: "Jessica J.",
    date: "22nd September, 2022",
    title: "Chocolate Chip Oatmeal Cookie",
    description: "A new and improved version of our popular chocolate chip oatmeal cookie pancakes, this time made gluten-free, vegan, and requiring just one bowl love!",
    render: "false"
  },
  {
    recipe: "Sausage",
    author: "Lewis W.",
    date: "07th November, 2022",
    title: "Spicy Tempeh Breakfast Sausage",
    description: "Spicy vegan breakfast sausage made with protein-rich tempeh. Smoky, savory, and flavorful, and just 1 bowl required! A delicious, plant-based sausage.",
    render: "true"
  },
  {
    recipe: "Biscuits",
    author: "Isabel",
    date: "15th December, 2022",
    title: "Vegan Biscuits and Gravy",
    description: "Flaky vegan biscuits with thick, peppery mushroom gravy! A flavorful, healthy, satisfying 30-minute vegan breakfast. Gluten-free, perfectly sweet, coconut oil.",
    render: "false"
  }
];



export default { starterCategory, starterMenu, diningCategory, diningMenu, dessertCategory, dessertMenu, barCategory, barMenu, awards, customers, blogs };