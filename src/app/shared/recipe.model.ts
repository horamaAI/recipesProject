export class Recipe {

    id: string;
    name: string;
    source: string;
    preptime: number;
    waitime: number;
    cooktime: number;
    servings: number;
    comments: string;
    calories: number;
    fat: number;
    satfat: number;
    carbs: number;
    fiber: number;
    sugar: number;
    protein: number;
    instructions: string;
    ingredients: string[];
    tags: string[];

    constructor(
        idParam: string,
        nameParam: string,
        sourceParam: string,
        prepTimeParam: number,
        waitTimeParam: number,
        cooktimeParam: number,
        servingsParam: number,
        commentsParam: string,
        caloriesParam: number,
        fatParam: number,
        satfatParam: number,
        carbsParam: number,
        fiberParam: number,
        sugarParam: number,
        proteinParam: number,
        instructionsParam: string,
        ingredientsParam: string[],
        tagsParam: string[]
        ) {
        this.id = idParam;
        this.name = nameParam;
        this.source = sourceParam;
        this.preptime = prepTimeParam;
        this.waitime = waitTimeParam;
        this.cooktime = cooktimeParam;
        this.servings = servingsParam;
        this.comments = commentsParam;
        this.calories = caloriesParam;
        this.fat = fatParam;
        this.satfat = satfatParam;
        this.carbs = carbsParam;
        this.fiber = fiberParam;
        this.sugar = sugarParam;
        this.protein = proteinParam;
        this.instructions = instructionsParam;
        this.ingredients = ingredientsParam;
        this.tags = tagsParam;
    }

    outlineRecipe() {
        return this.name + ' ' + this.source;
    }
}
