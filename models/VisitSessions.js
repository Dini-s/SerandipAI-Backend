import mongoose from "mongoose";

const visitSessionSchema = new mongoose.Schema({
    userId: {
        typr: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },

    startLocation: {
        type: {
            type: String,
            default: "Point"
        },
        coordinates: [number]
    },
    currentLocation: {
        type: {
            type: String,
            default: "Point"
        },
        coordinates: [number]
    },

    aiPredictedLanguages: {
        type: [String],
        validate: v => v.length >= 5
    },
    isActive: {
        type: Boolean,
        default: true
    }

}, { timestamps: true });


visitSessionSchema.index({
    currentLocation: "2dsphere"
})


export default mongoose.model("VisitSession", visitSessionSchema);