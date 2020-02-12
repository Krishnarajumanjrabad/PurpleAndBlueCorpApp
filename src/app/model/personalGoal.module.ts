export class PersonalGoal{
    goal: number;
    cost: number;
    expectedTime: number;


    setPersonalGoal(perGoal: PersonalGoal){
        this.goal = perGoal.goal;
        this.cost = perGoal.cost;
        this.expectedTime = perGoal.expectedTime;
    }
}