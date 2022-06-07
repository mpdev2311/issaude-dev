enum PlanAgreeEnum {
    Particular = 1,
    SUS = 2,
}

const PlanAgreeEnumMap = new Map<PlanAgreeEnum, string>([
    [PlanAgreeEnum.SUS, "SUS"],
    [PlanAgreeEnum.Particular, "Particular"]
]);

export { PlanAgreeEnum, PlanAgreeEnumMap };