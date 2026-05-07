/* ===== MENU DATA ===== */
const MENU = {
  breakfast: [
    { name: "The Quick Start", price: 39, desc: "Two rashers of prime back bacon, one fried egg, one slice of toast, chips and grilled tomato." },
    { name: "The Kick Off", price: 65, desc: "Two fried eggs, two rashers of bacon, two slices of toast, chips and grilled tomato.", tags: ["hot"] },
    { name: "Traditional Breakfast", price: 75, desc: "Two fried eggs, bacon, a pork banger, grilled tomato, toast and golden home fries." },
    { name: "Three Egg Omelette", price: 99, desc: "A folded three egg omelette filled with your choice of three ingredients: ham, bacon, chilli mince, cheddar or mozzarella cheese, Danish feta, creamed spinach, fried onions, sliced mushrooms, diced tomatoes. Served with toast." },
    { name: "Sausage, Egg & Chips", price: 89, desc: "Three succulent pork sausages grilled 'til golden brown, served with two fried eggs and a generous portion of home fries." },
    { name: "Peri Livers on Toast", price: 79, desc: "Two slices of toast laden with a generous portion of pan-fried peri-peri chicken livers." },
    { name: "Breakfast Roll", price: 79, desc: "A freshly baked Portuguese roll laden with scrambled eggs, two rashers of bacon, mushrooms and cheddar cheese." },
    { name: "Savoury Mince on Toast", price: 79, desc: "Two slices of toast topped with our legendary savoury mince and melted cheddar cheese." },
    { name: "Breakfast Croissant", price: 79, desc: "A freshly baked croissant stuffed with scrambled eggs, bacon rashers and chives." },
    { name: "Early Bird Wrap", price: 99, desc: "Crispy bacon rashers, scrambled egg, button mushrooms, cheddar cheese, spring onion, grilled tomato and rocket, served with chips." },
    { name: "The Patriot", price: 99, desc: "Boerewors, two rashers of bacon, two fried eggs, two slices of toast, chips, fried onions and grilled tomato." },
    { name: "The Naked Burger", price: 119, desc: "Two large black mushrooms, 150g beef burger patty, mozzarella cheese and a fried egg." },
    { name: "Brunch Burger", price: 119, desc: "Our traditional 150g homemade patty layered with bacon, egg and grated cheddar cheese, served with chips." },
    { name: "Boerie Burger", price: 119, desc: "Our homemade 200g boerewors patty layered with bacon, egg and grated cheddar cheese, served with chips.", tags: ["hot"] },
    { name: "Breakfast Medley", price: 135, desc: "Two poached eggs, two rashers of bacon, two slices of toast, grilled halloumi fingers, fried cherry tomatoes and sliced white button mushrooms sautéed in a herb butter." },
    { name: "Full Time Breakfast", price: 195, desc: "200g tender rump steak, two fried eggs, two rashers of bacon, boerewors, baked beans, two slices of toast, chips, fried onions and grilled tomato. Oh, and somewhere to put it all!", tags: ["hot"] },
  ],
  lightFare: [
    { name: "Trinchado — Pub Style", price: 125, desc: "Tender strips of beef or chicken, pan-fried in a creamy garlic & white wine sauce, with a hint of fresh chilli, served with a hot Portuguese roll or chips.", variants: [{ label: "Chicken", price: 125 }, { label: "Beef", price: 139 }] },
    { name: "Peri-Peri Livers", price: 79, desc: "A generous portion of chicken livers, pan-fried in a creamy peri-peri sauce, served with fresh toast." },
    { name: "Halloumi Dipper", price: 89, desc: "Deep-fried halloumi cheese fingers, served with a sweet thai-chilli sauce and a lemon wedge." },
    { name: "Cheesy Snails", price: 89, desc: "Half a dozen snails covered in a creamy garlic & white wine sauce, smothered in melted mozzarella cheese, served with brown bread fingers." },
    { name: "Boerewors Bites", price: 89, desc: "A generous portion of juicy boerewors, cut into bite-size pieces and served with a traditional tomato and onion gravy with a hint of mild curry, served with a warm Portuguese roll." },
    { name: "Tatoe Skins", price: 69, desc: "Thin potato wedges topped with Napoli sauce and melted cheddar cheese, served with sour cream and guacamole. Add bacon bits +R10.", variants: [{ label: "Plain", price: 69 }, { label: "+ Bacon", price: 79 }] },
    { name: "Jalapeño Poppers", price: 69, desc: "Four medium sized homemade crumbed jalapeños stuffed with mozzarella cheese, served with a sweet thai-chilli sauce.", variants: [{ label: "Classic", price: 69 }, { label: "Cheddar & Peppadews", price: 89 }, { label: "Cheddar & Bacon", price: 95 }] },
    { name: "Spicy Mince Fold-Over", price: 95, desc: "A lightly toasted tortilla, folded, and filled with spicy mince, melted cheddar cheese, shredded lettuce and chopped tomato, served with golden fries." },
    { name: "Quesadilla", price: 89, desc: "Soft flour tortilla triangles filled with melted cheddar, served with shredded lettuce and tomato, guacamole, Mexican salsa and sour cream on the side.", variants: [{ label: "Classic", price: 89 }, { label: "+ Spicy Chicken", price: 119 }] },
    { name: "Chicken Mayo Croissant", price: 99, desc: "A buttery golden croissant filled with chicken breast fillet, shredded and blended with our tangy mayo, topped with fresh avo slices and peppadew slivers." },
    { name: "Mini Pizza (12cm)", price: 69, desc: "Pub style 12cm pizza with peppers, mushrooms, onions and mozzarella cheese. Add bacon bits +R10.", variants: [{ label: "Veggie", price: 69 }, { label: "+ Bacon", price: 79 }] },
    { name: "Nachos", price: 109, desc: "Crunchy tortilla chips oven-baked with cheddar and mozzarella cheese, sprinkled with spicy jalapeños, served with guacamole, sour cream and Mexican salsa.", variants: [{ label: "Classic", price: 109 }, { label: "+ Chicken", price: 129 }, { label: "+ Beef", price: 135 }] },
    { name: "Brie & Bacon", price: 139, desc: "A generous wedge of brie cheese, crumbed and deep-fried, topped with strips of crispy bacon and served with cranberry sauce and fresh brown toast on the side." },
    { name: "Garlic Mussel Pot", price: 139, desc: "Half-shell New Zealand mussels, prepared in a creamy garlic & white wine sauce, served with garlic bread for dunking." },
    { name: "Calamari", price: 99, desc: "A generous portion of crumbed calamari served with steamed yellow rice and a tartare sauce." },
  ],
  pubGrub: [
    { name: "Bangers & Mash", price: 89, desc: "Three succulent pork sausages, served on a bed of homemade mashed potatoes and smothered in a hearty brown onion gravy, accompanied by fresh vegetables of the day." },
    { name: "Frikkadels, Mash & Gravy", price: 119, desc: "Succulent beef meatballs smothered in a rich brown onion gravy, served on a bed of creamy mashed potatoes, accompanied by hot vegetables of the day." },
    { name: "Liver & Onions", price: 109, desc: "Tender strips of liver, pan-fried with bacon bits and onions in a rich brown onion gravy, served with mashed potatoes and veggies.", tags: ["new"] },
    { name: "Club Sandwich", price: 129, desc: "Grilled chicken breasts, topped with crispy bacon, cheddar cheese, lettuce and tomato, served on a fresh sesame loaf, accompanied with chips and honey mustard mayo." },
    { name: "Chicken Wrap", price: 129, desc: "Layers of succulent chicken breast, guacamole, smooth cream cheese, cucumber, spring onion and sweet thai-chilli sauce, served with home fries." },
    { name: "Bobotie", price: 149, desc: "Traditional South African bobotie – minced beef blended with onions, eastern spices and baked with an egg custard topping, served with steamed yellow rice and sambals.", tags: ["hot"] },
    { name: "Fish & Chips", price: 149, desc: "Fillet of hake prepared in our homemade beer batter and deep-fried 'til golden brown, served with home fries, French salad and a tangy tartare sauce." },
    { name: "Calamari", price: 149, desc: "A generous portion of crumbed calamari served with steamed yellow rice and a tartare sauce." },
    { name: "Frankfurter Fix", price: 135, desc: "A freshly baked sesame loaf with frankfurter sausage, fried onion, jalapeño peppers, melted mozzarella and cheddar cheese, served with chips." },
    { name: "Chicken Schnitzel", price: 135, desc: "Tender chicken breast, crumbed and deep-fried 'til golden brown, complemented with a creamy cheese, mushroom or pepper sauce on the side. Served with your choice of starch and vegetables of the day." },
    { name: "Chicken & Broccoli Bake", price: 135, desc: "Diced chicken and broccoli in a creamy herb sauce, oven-baked with cheddar cheese, served with our vegetables of the day." },
    { name: "Chicken & Avo Wrap", price: 135, desc: "Succulent crumbed chicken strips, avocado, feta, peppadew and creamy mayo wrapped in a soft tortilla, served with chips." },
    { name: "Mexican Schnitzel", price: 139, desc: "Chicken schnitzel with a hint of peri-peri spice topped with Mexican salsa and oven-baked with cheddar cheese, served with a Greek salad or your choice of starch." },
    { name: "Steak, Egg & Chips", price: 159, desc: "A tender 200g prime cut of rump, flame-grilled to your liking and topped with a fried egg, served with braised onions and home fries.", tags: ["hot"] },
    { name: "Prego Roll", price: 155, desc: "200g of prime beef rump, flame-grilled and topped with our very own garlic & chilli sauce on a fresh Portuguese roll, served with home fries.", tags: ["hot"] },
    { name: "Grilled Pork Chops", price: 169, desc: "Two juicy 200g pork loin chops grilled on an open flame, served with homemade mashed potatoes, brown onion gravy and fresh vegetables of the day." },
    { name: "Seafood Gumbo", price: 179, desc: "Pan-fried calamari, hake and half-shell mussels, smothered in our own gumbo sauce and served with toasted garlic bread wedges." },
    { name: "Pap & Vleis", price: 179, desc: "Prime 200g rump grilled to perfection, boerewors and homemade mielie pap, served with our tomato and onion gravy." },
    { name: "Half Chicken, Chips & Salad", price: 185, desc: "A juicy half chicken grilled on an open flame, basted with your choice of lemon & herb, peri-peri or BBQ, served with golden fries and a fresh French salad." },
    { name: "Eisbein", price: 249, desc: "Pork knuckle basted with apricot mustard glaze, served with sauerkraut, homemade mashed potatoes and vegetables, with an apple mustard sauce on the side." },
  ],
  pasta: [
    { name: "Spaghetti Bolognese", price: 135, desc: "A medley of ground beef blended with tomatoes, onion, garlic, fresh basil and a hint of celery. Served with parmesan cheese on the side." },
    { name: "Lip Smackin' Chicken", price: 135, desc: "Juicy chicken breast strips, blended with onions, green peppers, chilli and spinach, simmered in a cream and tomato concassé and poured over fettuccine." },
    { name: "Fettuccine Alfredo", price: 139, desc: "Smoked ham strips with sliced white button mushrooms and doused in a thick creamy white sauce with parmesan cheese on the side." },
    { name: "Chicken, Bacon & Mushroom", price: 139, desc: "A superb combination of tender chicken breast cubes, bacon bits, mushrooms and creamy arrabiata sauce with pasta shells, complemented with warmed pita bread on the side." },
    { name: "Lasagne", price: 159, desc: "Ground beef slow-cooked with garlic, tomato and fresh basil, layered between pasta sheets and topped with a Napoli sauce, melted mozzarella and cheddar cheese.", tags: ["new"] },
    { name: "Cannelloni Spinach & Ricotta", price: 159, desc: "Cannelloni tubes filled with creamed baby spinach leaves and ricotta cheese, covered in Napolitana sauce and melted mozzarella cheese.", tags: ["new"] },
  ],
  curries: [
    { name: "Vegetable Curry", price: 135, desc: "A medley of seasonal vegetables, slow cooked in mild curry spices, served with steamed yellow rice and sambals." },
    { name: "Chicken Curry", price: 165, desc: "Diced chicken breast simmered with coriander, cumin, masala and a hint of cinnamon, served with steamed yellow rice, sambals and a poppadom." },
    { name: "Beef Curry", price: 179, desc: "Trimmed beef cubes cooked overnight with traditional Indian spices, served with a golden poppadom, yellow rice and sambals." },
    { name: "Chicken & Prawn Curry", price: 179, desc: "Tender cubes of chicken breast fillet and succulent prawns, simmered in a sweet mild curry sauce, served with steamed yellow rice, a poppadom and sambals." },
    { name: "Lamb Hot Pot", price: 199, desc: "Slow-cooked in a rich red wine gravy with potatoes and carrots, served in a cast iron pot with mashed potatoes and hot vegetables on the side." },
    { name: "Lamb Curry", price: 199, desc: "Succulent cubes of boneless lamb prepared the Cape Malay way and served with a crisp poppadom, yellow rice and sambals.", tags: ["hot"] },
    { name: "Oxtail", price: 249, desc: "Slow-braised oxtail cooked low and slow until it falls off the bone, served with creamy mashed potatoes and vegetables of the day.", tags: ["hot"] },
  ],
  salads: [
    { name: "Greek Salad", price: 79, desc: "Fresh garden salad topped with tomatoes, cucumber, Danish feta, ripe calamata olives and fresh onions, served with our Greek dressing." },
    { name: "Spicy Chicken & Avo Salad", price: 129, desc: "Juicy chicken breast fillets sautéed in rough chilli with a hint of garlic, served on a bed of exotic lettuce leaves and topped with sliced avocado and a tangy sweet chilli dressing." },
    { name: "Caribbean Chicken Salad", price: 155, desc: "Chicken breast strips marinated in tequila and lime, pan-fried with fresh pineapple pieces. Served on a bed of exotic lettuce leaves, tomato, cucumber, onion and peppadews, topped with cheddar cheese and a sweet chilli dressing, with toasted pita wedges." },
    { name: "Halloumi, Bacon & Avo", price: 149, desc: "Grilled halloumi cheese, crispy bacon and creamy avocado on a bed of fresh rocket and mixed greens, with cherry tomatoes and a honey mustard dressing." },
    { name: "Biltong & Avo Salad", price: 159, desc: "Shredded biltong and sliced avocado on a bed of exotic mixed greens, with cherry tomatoes, red onion and a light balsamic vinaigrette." },
    { name: "Smoked Salmon Salad", price: 179, desc: "Norwegian smoked salmon on a bed of mixed greens with capers, red onion, cucumber ribbons, Danish feta and a lemon cream dressing." },
  ],
};

const COCKTAILS = [
  { name: "Mojito Original", ing: "Bacardi, Mojito mix, mint leaves, lime wedges, sugar syrup and soda water", ico: "🍹" },
  { name: "Amarula Chocolate Shake", ing: "Amarula, vodka, Nachtmusik and ice cream", ico: "🥤" },
  { name: "Singapore Swing", ing: "Gin, cherry liqueur, triple sec, brandy, lime, grenadine and pineapple juice", ico: "🌸" },
  { name: "Californian Iced Tea", ing: "Bacardi, vodka, gin, gold tequila, blue curacao, sour mix and lemonade", ico: "🍋" },
  { name: "Bloody Mary", ing: "Vodka, tomato cocktail, celery, pepper, Tabasco and Worcestershire Sauce", ico: "🍅" },
  { name: "Berry Chiller", ing: "Vodka, amaretto, triple sec, orange and wild berry juice", ico: "🫐" },
  { name: "Gordon's Berry Fizz", ing: "Gordon's gin, lemon, cranberry juice and ginger ale", ico: "🍾" },
  { name: "Call Me a Cab", ing: "Malibu, Southern Comfort, vodka, peach schnapps, banana liqueur and pineapple juice", ico: "🚕" },
  { name: "Cosmopolitan", ing: "Vodka, triple sec, lime cordial and wild berry juice", ico: "🌆" },
  { name: "Hippie Juice", ing: "Malibu, watermelon vodka, triple sec and pink ice", ico: "🌈" },
  { name: "Fizzpop", ing: "Vodka, apple sours, sparberry", ico: "✨", isNew: true },
  { name: "Watermelon Fizzpop", ing: "Vodka, watermelon liqueur, lime juice and mint", ico: "🍉", isNew: true },
];

const SHOOTERS_25 = [
  { name: "Blue Balls", desc: "Vodka and Blueberry Cordial" },
  { name: "Springbok", desc: "Peppermint and Amarula" },
  { name: "Sweet Sixteen", desc: "Cherry liqueur, Amarula and a maraschino cherry" },
  { name: "B52", desc: "Kahlua, Amarula and white sambuca" },
  { name: "Bubblebutt", desc: "Bubblegum tequila and silk panties" },
  { name: "Blow Job", desc: "Kahlua, Amarula and cream" },
  { name: "Butterscotch", desc: "Caramel vodka and silk panties" },
  { name: "Bob Marley", desc: "Peppermint, Amarula and red sambuca" },
  { name: "Soweto Toilet", desc: "Banana liqueur, Amarula and Nachtmusik" },
  { name: "Green & Gold", desc: "Gold tequila and apple sours" },
  { name: "Banana Blow Job", desc: "Banana liqueur, Amarula and cream" },
  { name: "Russian Nut", desc: "Frangelico and vodka" },
  { name: "Choc Strawberry Kiss", desc: "Strawberry cream tequila and Nachtmusik" },
  { name: "Slippery Nipple", desc: "Amarula and white sambuca" },
  { name: "Jelly Baby", desc: "Banana, blue curacao, Amarula and grenadine" },
  { name: "Turkish Delight", desc: "Nachtmusik and grenadine" },
];

const SHOOTERS_29 = [
  { name: "Barney on Acid", desc: "Po10c and white sambuca", isNew: true },
  { name: "Passion Panties", desc: "Cherry liqueur, passion fruit and vodka", isNew: true },
  { name: "Pink Balls", desc: "Kahlua, Strawberry Lips and cream", isNew: true },
  { name: "Silk Panties", desc: "Vodka, cinnamon and condensed milk" },
  { name: "Diddle Daddle", desc: "Caramel vodka and Frangelico" },
  { name: "Liquid Cocaine", desc: "Vodka, blue curacao and lime" },
  { name: "Mike Tyson", desc: "Black sambuca and Stroh Rum" },
  { name: "4X4", desc: "Kahlua, peppermint, Amarula and Stroh Rum" },
  { name: "Pancake", desc: "Aftershock and Amarula" },
  { name: "Sex with the Ex", desc: "Gold tequila, coffee tequila & Stroh Rum" },
  { name: "Black Forest", desc: "Nachtmusik, Amarula choc raspberry and cream" },
  { name: "Suitcase", desc: "Jack Daniels and passion fruit" },
  { name: "Marshmallow", desc: "Strawberry tequila cream and silk panties" },
  { name: "Jäger Snap", desc: "Jägermeister and peach schnapps" },
  { name: "Devil's Tears", desc: "Aftershock and vodka" },
  { name: "Sledgehammer", desc: "Kahlua, Amarula and Stroh Rum" },
  { name: "Dirty Panties", desc: "Silk panties, banana, Nachtmusik" },
  { name: "Caramello Bear", desc: "Caramel vodka and chocolate vodka" },
  { name: "Oral Orgasm", desc: "Amarula, cherry liqueur and Nachtmusik" },
  { name: "Fire & Ice", desc: "Aftershock and blue curacao" },
  { name: "Tequila Dream", desc: "Strawberry & bubblegum tequila cream" },
  { name: "Flaming Suicide", desc: "Black sambuca, absinthe and Stroh Rum" },
  { name: "Liquid Marijuana", desc: "Absinthe, lime and vodka" },
  { name: "Runaway Bride", desc: "Silk panties and Nachtmusik" },
];

/* ===== STATE ===== */
let currentCat = 'breakfast';
let searchTerm = '';
let tabItems = [];
let shooterFilter = 'all';

/* ===== DOM REFS ===== */
const menuGrid = document.getElementById('menuGrid');
const tabBadge = document.getElementById('tabBadge');
const tabCount = document.getElementById('tabCount');
const drawerEl = document.getElementById('drawer');
const overlayEl = document.getElementById('overlay');
const drawerBody = document.getElementById('drawerBody');
const drawerAmt = document.getElementById('drawerAmt');
const timerVal = document.getElementById('timerVal');
const bfastBar = document.getElementById('bfastBar');
const resultCt = document.getElementById('resultCt');

/* ===== RENDER MENU ===== */
function renderMenu() {
  const items = MENU[currentCat] || [];
  const q = searchTerm.toLowerCase();
  const filtered = q ? items.filter(i => i.name.toLowerCase().includes(q) || i.desc.toLowerCase().includes(q)) : items;

  resultCt.textContent = `${filtered.length} item${filtered.length !== 1 ? 's' : ''}`;

  if (!filtered.length) {
    menuGrid.innerHTML = `<div class="empty-state"><span class="empty-ico">🔍</span><p>No matches for "<strong>${searchTerm}</strong>" — try another search.</p></div>`;
    return;
  }

  menuGrid.innerHTML = filtered.map((item, i) => {
    const tags = (item.tags || []).map(t => `<span class="tag tag-${t}">${t}</span>`).join('');
    const variants = item.variants ? `<div class="mc-variants">${item.variants.map(v => `<span class="mc-var">${v.label} <span class="vp">R${v.price}</span></span>`).join('')}</div>` : '';
    const showPrice = item.variants ? item.variants[0].price : item.price;
    return `
      <div class="mc reveal" style="transition-delay:${i * 0.04}s">
        <div class="mc-head">
          <div class="mc-name">${item.name}</div>
          <div class="mc-price"><span class="r">R</span>${showPrice}</div>
        </div>
        <p class="mc-desc">${item.desc}</p>
        ${variants}
        <div class="mc-foot">
          <div class="mc-tags">${tags}</div>
          <button class="add-btn" onclick="addToTab(${JSON.stringify(item).replace(/"/g, '&quot;')})" title="Add to tab">+</button>
        </div>
      </div>`;
  }).join('');

  // Trigger reveal
  requestAnimationFrame(() => {
    document.querySelectorAll('.mc.reveal').forEach((el, i) => {
      setTimeout(() => el.classList.add('in'), i * 40);
    });
  });
}

/* ===== CATEGORY SWITCH ===== */
function switchCat(cat, btn) {
  currentCat = cat;
  searchTerm = '';
  document.getElementById('searchInput').value = '';
  document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  renderMenu();
}

/* ===== SEARCH ===== */
function onSearch(val) {
  searchTerm = val;
  renderMenu();
}

/* ===== COCKTAILS ===== */
function renderCocktails() {
  const grid = document.getElementById('cktlGrid');
  grid.innerHTML = COCKTAILS.map(c => `
    <div class="cktl-card">
      ${c.isNew ? '<span class="cktl-badge">New</span>' : ''}
      <span class="cktl-ico">${c.ico}</span>
      <div class="cktl-name">${c.name}</div>
      <div class="cktl-ing">${c.ing}</div>
    </div>`).join('');
}

/* ===== SHOOTERS ===== */
function renderShooters(filter) {
  shooterFilter = filter || shooterFilter;
  const grid = document.getElementById('shotGrid');
  let items = [];
  if (shooterFilter === 'all' || shooterFilter === '25') items = items.concat(SHOOTERS_25.map(s => ({ ...s, price: 25 })));
  if (shooterFilter === 'all' || shooterFilter === '29') items = items.concat(SHOOTERS_29.map(s => ({ ...s, price: 29 })));
  grid.innerHTML = items.map(s => `
    <div class="shot-card">
      <div class="shot-name">${s.name}${s.isNew ? '<span class="shot-new">New</span>' : ''}</div>
      <div class="shot-desc">${s.desc}</div>
      <div class="shot-price">R${s.price}</div>
    </div>`).join('');
  document.querySelectorAll('.ppill').forEach(p => {
    p.classList.toggle('active', p.dataset.filter === shooterFilter);
  });
}

/* ===== TAB SYSTEM ===== */
function addToTab(item) {
  tabItems.push({ name: item.name, price: item.variants ? item.variants[0].price : item.price });
  updateBadge();
  renderDrawer();
  showToast(`${item.name} added to your tab`);
}

function removeFromTab(idx) {
  tabItems.splice(idx, 1);
  updateBadge();
  renderDrawer();
}

function updateBadge() {
  const n = tabItems.length;
  tabBadge.textContent = n;
  tabCount.textContent = n;
  tabBadge.classList.add('bump');
  setTimeout(() => tabBadge.classList.remove('bump'), 300);
}

function renderDrawer() {
  if (!tabItems.length) {
    drawerBody.innerHTML = `<div class="drawer-empty"><span class="de-ico">🍺</span><p>Your tab is empty.<br>Add some items from the menu!</p></div>`;
    drawerAmt.textContent = 'R0';
    return;
  }
  const total = tabItems.reduce((s, i) => s + i.price, 0);
  drawerBody.innerHTML = tabItems.map((item, i) => `
    <div class="drawer-item">
      <div class="di-name">${item.name}</div>
      <div class="di-price">R${item.price}</div>
      <button class="di-rm" onclick="removeFromTab(${i})" title="Remove">✕</button>
    </div>`).join('');
  drawerAmt.textContent = `R${total}`;
}

function openDrawer() {
  drawerEl.classList.add('open');
  overlayEl.classList.add('on');
}

function closeDrawer() {
  drawerEl.classList.remove('open');
  overlayEl.classList.remove('on');
}

function callWaiter() {
  showToast('🙋 Waiter has been called! Be right with you.');
  closeDrawer();
}

/* ===== TOAST ===== */
let toastTimer = null;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2800);
}

/* ===== NAV SCROLL ===== */
const navEl = document.getElementById('mainNav');
function onScroll() {
  navEl.classList.toggle('stuck', window.scrollY > 60);
  // Reveal
  document.querySelectorAll('.reveal:not(.in)').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) el.classList.add('in');
  });
}

/* ===== BREAKFAST TIMER ===== */
function updateTimer() {
  const now = new Date();
  const h = now.getHours(), m = now.getMinutes();
  const totalMins = h * 60 + m;
  const openMins = 8 * 60;
  const closeMins = 11 * 60;

  if (totalMins < openMins) {
    const diff = openMins - totalMins;
    timerVal.textContent = `Opens in ${Math.floor(diff / 60)}h ${diff % 60}m`;
    bfastBar.className = 'bfast-bar';
  } else if (totalMins < closeMins) {
    const diff = closeMins - totalMins;
    timerVal.textContent = `${Math.floor(diff / 60)}h ${diff % 60}m left`;
    bfastBar.className = diff < 30 ? 'bfast-bar warn' : 'bfast-bar';
  } else {
    timerVal.textContent = 'Back tomorrow at 8am';
    bfastBar.className = 'bfast-bar closed';
  }
}

/* ===== MOBILE NAV ===== */
const hamBtn = document.getElementById('hamBtn');
const mobNav = document.getElementById('mobNav');
function toggleMob() {
  hamBtn.classList.toggle('open');
  mobNav.classList.toggle('open');
}
function closeMob() {
  hamBtn.classList.remove('open');
  mobNav.classList.remove('open');
}

/* ===== TICKER DUPLICATE ===== */
function setupTicker() {
  const track = document.getElementById('tickerTrack');
  track.innerHTML += track.innerHTML; // duplicate for seamless loop
}

/* ===== INIT ===== */
window.addEventListener('DOMContentLoaded', () => {
  setupTicker();
  renderMenu();
  renderCocktails();
  renderShooters('all');
  updateTimer();
  setInterval(updateTimer, 30000);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
});
