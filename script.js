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

    if (weight >= 80 && weight <= 100) {
        weightRecommendation = "Weight Recommendation: <br>" +
            "1. Drink a lot of water <br>" +
            "2. Eat a lot of fiber <br>" +
            "3. Have an early dinner <br>" +
            "4. Opt for 5-6 meals a day";
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
            "1. Plenty of colorful vegetables, legumes/beans. <br>" +
            "2. Fruits. <br>" +
            "3. Grain (cereal) foods – mostly wholegrain and high-fiber varieties. <br>" +
            "4. Lean meats and poultry, fish, eggs, tofu, nuts and seeds. <br>" +
            "5. Milk, yogurt, cheese or their alternatives, mostly reduced fat.";
    } else if (gender === "female") {
        genderRecommendation = "Gender Recommendation for Female. <br>" +
            "1. Wholegrain breakfast cereal, with reduced fat milk. <br>" +
            "2. Reduced fat yogurt. <br>" +
            "3. Coffee with milk. <br>" +
            "4. Sandwich with salad and chicken. <br>" +
            "5. Apple. <br>" +
            "6. Unsalted nuts and Coffee with milk. <br>" +
            "7. Pasta with beef mince and red kidney beans, tomato and green salad with olive oil and vinegar dressing.<br>" +
            "8. Plums and reduced fat yogurt.";
    }

    // Display the recommendations in the output div
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = " <br>" + dietRecommendation + " <br>" +
        " <br>" + weightRecommendation + " <br>" +
        " <br>" + heightRecommendation + " <br>" +
        "<br>" + genderRecommendation;
}
document.getElementById("gain").addEventListener("click", function () {
    // Redirect to the gain page
    location.reload();
});

document.getElementById("loss").addEventListener("click", function () {
    // Redirect to the gain page
    location.reload();
});
