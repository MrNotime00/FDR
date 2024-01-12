function calculateDiet() {
    // Input values from the HTML form
    var age = parseInt(document.getElementById("age").value);
    var weight = parseInt(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);
    var gender = document.getElementById("gender").value;

    // Diet recommendations based on age
    var dietRecommendation = "";

    if (age >= 20 && age < 30) {
        dietRecommendation = " Age Based Diet Recommendation: <br> Breakfast: 24-ounce Jamba Juice Protein Berry Pizzazz Smoothie. It's packed with protein to keep you satisfied.\n<br>" +
            "Morning Snack: 1 packet instant oatmeal sprinkled with 1 tablespoon ground flaxseed\n<br>"+
            "Lunch: Asian grilled-chicken salad with mixed greens, edamame, mandarin oranges, tomatoes, and low-fat vinaigrette\n<br>" +
            "Afternoon Snack: Medium orange and 1 tablespoon chopped walnuts\n<br>" +
            "Dinner: 7 pieces sushi and 1 cup edamame\n<br>" +
            "Evening Treat: Gingerbread ice cream sandwich";
    } else if (age >= 30 && age < 40) {
        dietRecommendation = " Age Based Diet Recommendation: <br> Breakfast: Whole-wheat English muffin topped with 2 tablespoons natural peanut butter and 1/2 small sliced banana, and 1 cup calcium- and vitamin D-fortified orange juice\n <br>" +
            "Morning Snack: 1/2 cup Cheerios with 1/2 cup 1-percent or nonfat milk\n <br>" +
            "Lunch: Curried shrimp salad in a whole wheat pita, and 1 cup watermelon chunks\n <br>" +
            "Afternoon Snack: 6-ounce container light yogurt with 1/2 cup raspberries\n <br>" +
            "Dinner: Chickpea salad, 4 ounces lean flank steak, grilled or broiled, topped with 2 tablespoons teriyaki sauce, 2 cups baby spinach sautéed in 1 teaspoon olive oil, and 1 medium baked sweet potato\n <br>" +
            "Evening Treat: 1 ounce dark chocolate";
    } else if (age >= 40 && age <= 50) {
        dietRecommendation = "Age Based Diet Recommendation: <br> Breakfast: 1 cup high-fiber cereal with 1 cup 1-percent milk and 1 cup blueberries, and 1 cup green tea\n<br>" +
            "Morning Snack: 1 medium apple with 1 tablespoon soy-nut butter\n<br>" +
            "Lunch: Veggie burger on a whole wheat bun with 2 slices low-fat cheddar cheese (1 ounce each), and a 6-ounce can low-sodium vegetable juice\n<br>" +
            "Afternoon Snack: 2 tablespoons hummus with 6 whole wheat crackers\n<br>" +
            "Dinner: 3 ounces broiled salmon over 1 cup barley pilaf, and 6 asparagus spears sautéed in 1 teaspoon olive oil\n<br>" +
            "Evening Treat: 6-ounce container light vanilla yogurt topped with 1 tablespoon mini chocolate chips";
    }

    // Diet recommendations based on weight
    var weightRecommendation = "";

    if (weight >= 35 && weight <= 60) {
        weightRecommendation = "Weight Recommendation: <br>" +
        "Caloric Surplus:<br>" +

        "Consume more calories than your body burns. This is essential for weight gain.<br>" +
        "Calculate your daily caloric needs and aim for a surplus by increasing your calorie intake.<br>" +
        "Protein Intake:<br>" +
        
        "Include sources of lean protein to support muscle development.<br>" +
        "Good protein sources include lean meats, poultry, fish, eggs, dairy products, legumes, nuts, and seeds.<br>" +
        "Carbohydrates:<br>" +
        
        "Choose complex carbohydrates for sustained energy and to meet increased caloric needs.<br>" +
        "Include whole grains, brown rice, quinoa, oats, sweet potatoes, and whole-grain bread.<br>" +
        "Healthy Fats:<br>" +
        
        "Include sources of healthy fats for additional calories and overall health.<br>" +
        "Avocados, nuts, seeds, olive oil, and fatty fish (like salmon) are good choices.<br>" +
        "Frequent Meals and Snacks:<br>" +
        
        "Eat smaller, frequent meals and snacks throughout the day to increase overall calorie intake.<br>" +
        "Include nutrient-dense snacks like nuts, dried fruits, yogurt, and smoothies.<br>" +
        "Strength Training:<br>" +
        
        "Engage in regular strength training exercises to promote muscle growth.<br>" +
        "Resistance training helps ensure that the extra calories you consume contribute to muscle mass rather than just fat.<br>" +
        "Dairy and Dairy Alternatives:<br>" +
        
        "Include whole milk, cheese, and yogurt to add extra calories and nutrients.<br>" +
        "Opt for fortified plant-based milk alternatives if you're lactose intolerant or follow a vegan diet.<br>" +
        "Stay Hydrated:<br>" +
        
        "Drink plenty of water throughout the day to stay hydrated.<br>" +
        "Avoid excessive consumption of sugary beverages, as they can fill you up without providing many nutrients.<br>" +
        "Nutrient-Dense Foods:<br>" +
        
        "Focus on nutrient-dense foods to ensure that the weight gain is accompanied by essential vitamins and minerals.<br>" +
        "Include a variety of fruits, vegetables, and whole foods in your diet.";
    }

    // Diet recommendations based on height
    var heightRecommendation = "";

    if (height >= 4.5 && height <= 6.0) {
        heightRecommendation = "Height Recommendation: <br>" +
            "1. Whole Grains & Beans <br>" +
            "2. Green Leafy Vegetables <br>" +
            "3. Dairy Products <br>" +
            "4. Eggs <br>" +
            "5. Soybean <br>" +
            "6. Banana <br>" +
            "7. Gritzo SuperMilk Height+";
    }

    // Diet recommendations based on gender
    var genderRecommendation = "";

    if (gender === "male") {
        genderRecommendation = "Gender Recommendation for Male: <br>" +
       " Protein Intake:  <br>" +
        "Adequate protein is crucial for muscle development. Include lean meats, poultry, fish, eggs, dairy products, legumes, nuts, and seeds.  <br>" +
        "Caloric Intake:  <br>" +
        "Males may generally require a higher caloric intake due to higher muscle mass and energy expenditure. Ensure a slight caloric surplus for healthy weight gain.  <br>" +
        "Strength Training:  <br>" +
        "Engage in regular strength training exercises to promote muscle growth and development.  <br>" +
        "Zinc Intake:  <br>" +
        "Adequate zinc is important for testosterone production and overall growth. Include sources like meat, dairy, and nuts. <br>" +
        "Hydration:  <br>" +
        "Stay well-hydrated, especially if engaging in physical activities that lead to increased sweating.";
    } else if (gender === "female") {
        genderRecommendation = "Gender Recommendation for Female. <br>" +
        "Calcium and Vitamin D: <br>" +
        "Females need to pay particular attention to calcium intake for bone health. Include dairy products, leafy green vegetables, and fortified plant-based milk. Ensure sufficient vitamin D for calcium absorption.<br>" +
        "Iron Intake: <br>" +
        "Iron is essential for females, especially during menstruation. Include iron-rich foods like lean meats, beans, lentils, and fortified cereals. <br>" +
        "Adequate Caloric Intake: <br>" +
        "Ensure sufficient calories to support overall health and energy needs. It's important not to underconsume calories, even if weight management is a goal.<br>" +
        "Regular Physical Activity: <br>" +
        "Engage in regular physical activity, including weight-bearing exercises, for overall health and fitness.<br>" +
        "Folate Intake:<br>" +
        "Adequate folate is important for females of childbearing age. Include sources like leafy green vegetables, beans, and fortified cereals.<br>" +
        "Hydration:<br>" +
        "Stay well-hydrated, paying attention to hydration needs, especially during menstruation.";
    }

 // Display the recommendations in the output div
 var outputDiv = document.getElementById("output");
            
 // Set border style for the output
 outputDiv.style.border = "2px solid #000"; // You can customize the border style
 outputDiv.style.textAlign = "left";
 outputDiv.style.padding = "10px";

    // Display the recommendations in the output div
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = " <br>" + dietRecommendation + " <br>" +
        " <br>" + weightRecommendation + " <br>" +
        " <br>" + heightRecommendation + " <br>" +
        "<br>" + genderRecommendation;
}


