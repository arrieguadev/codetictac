import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";

const UserSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        organization: {
            type: String
        },
        password: {
            type: String,
            required: true,
            select: false
        },
        wakatime_token: {
            type: String,
            select: false
        }
    },
    {
        timestamps: true
    }
);

UserSchema.pre("save", async function(next) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    next();
});

export default model("User", UserSchema);
