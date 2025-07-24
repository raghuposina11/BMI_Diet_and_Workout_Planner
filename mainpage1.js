let healthyfood=[
    {
     "image": "assets/diet1.avif",
      "title":  "Fresh and Nutritious Vegetables",
      "Content": "A vibrant mix of fresh vegetables including carrots, spinach, broccoli, and bell peppers, packed with essential vitamins and minerals to boost your health."
    },
    {
      "image": "assets/diet2.avif",
      "title": "Colorful Fruit Salad",
      'Content': "A refreshing bowl of mixed fruits like strawberries, kiwis, apples, and blueberries, perfect for a healthy snack or dessert."
    },
    {
      "image": "assets/diet3.avif",
      "title": "A Medley of Fresh Fruits",
      'Content': "An assortment of seasonal fruits including bananas, mangoes, grapes, and oranges, providing natural sweetness and nutrients."
    },
    {
      "image": "assets/diet4.avif",
      "title": "Hydrating Water-Rich Fruits",
      'Content': "A collection of water-rich fruits such as watermelon, cucumber, and cantaloupe, ideal for staying hydrated and refreshed."
    },
    {
      "image": "assets/diet8.avif",
      "title":  "Lean Protein: Chicken",
      'Content': "Deliciously cooked chicken breast, an excellent source of lean protein for muscle growth and repair."
    },
    {
      "image": "assets/diet9.avif",
      "title": "Healthy Meat Options: Chicken and Mutton",
      'Content': "A balanced plate featuring well-cooked chicken and tender mutton, high in protein and essential nutrients."
    },]

    parent=document.getElementById('parent1')
let newdata=healthyfood.map(function(val){
    child=document.createElement('div')
    childa=document.createElement('div')
    childb=document.createElement('div')
    img=document.createElement('img')

    childa.innerText=val.title
    childb.innerText=val.Content
    img.src=val.image

  child.classList.add('child');
  childa.classList.add('child-title');
  childb.classList.add('child-content');
  img.classList.add('child-image');

    child.append(img,childa,childb)
    parent1.append(child)
  })




  let fittness=[
    {
     "image": "assets/workout2.avif",
      "title":  "Find Your Balance: Yoga for Mind and Body",
      "Content": "Embrace the calming power of yoga. Perfect for all fitness levels, yoga improves flexibility, strength, and mental clarity. Start your day with peace and mindfulness, or unwind after a long day."
    },
    {
      "image": "assets/workout3.avif",
      "title": "Strength in Every Lift: Building Muscle with Weight Training",
      'Content':"Transform your body with weight lifting. Whether you’re looking to build muscle, increase strength, or improve endurance, weight lifting offers a comprehensive approach to fitness. Lift with purpose, and watch your body grow stronger."
    },
    {
      "image": "assets/workout7.avif",
      "title":  "Morning Runs: Embrace the Sunrise and Boost Your Energy",
      'Content':"Start your day with a refreshing morning run or walk as the sun rises. This invigorating activity increases your cardiovascular health, improves mood, and sets a positive tone for the day ahead."
    },
    {
      "image": "assets/workout8.avif",
      "title": "Full Body Workout: Sculpt and Tone Every Muscle",
      'Content':  "Achieve total body fitness with targeted workouts. Our full-body exercises help strengthen, tone, and build endurance, giving you a balanced workout routine that supports all aspects of your health and fitness."
    },
    {
      "image": "assets/workout4.avif",
      "title":  "Core Power: Abs for All!",
      'Content':"Strong is Beautiful: Shaping a toned core through consistency and effort. Empower your fitness journey with every rep!"
    },
    {
      "image": "assets/workout5.avif",
      "title": "Core Strength Unleashed!",
      'Content': "Strength in Every Crunch: Building core resilience and discipline one workout at a time. Push past limits to unlock your potential!"
    }]
    parent=document.getElementById('parent2')
    let newdata2=fittness.map(function(val){
        child=document.createElement('div')
        childa=document.createElement('div')
        childb=document.createElement('div')
        img=document.createElement('img')
    
        childa.innerText=val.title
        childb.innerText=val.Content
        img.src=val.image
    
      child.classList.add('child');
      childa.classList.add('child-title');
      childb.classList.add('child-content');
      img.classList.add('child-image');
      
    
        child.append(img,childa,childb)
        parent2.append(child)
      })


