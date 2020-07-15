const TipDataCollection = [
    {
        tip: "Clean Your Tank Regularly",
    },
    {
        tip: "wash your hands for at least 20 seconds"
    },
    {
        tip: "Dont eat fish in front of the fish tank."
    }
]

export const useTip = () => {
    return TipDataCollection.slice()
}