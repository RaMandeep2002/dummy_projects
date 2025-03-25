import express, { NextFunction, Request, Response } from "express";

const HOST = "localhost";
const PORT = process.env.PORT || 3000;
const app = express()

app.use(express.json());

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log(err.stack);
    res.status(500).json({ err: "something went working!" });
});

app.get("/", (req: Request, res: Response) => {
    try {
        res.status(200).json({
            success: true,
            message: "Welcome to the Salmon arm taxi API",
        });
    } catch (error) {
        // next(error);
        console.log("error ==> ", error);
    }
}
);
app.listen(PORT, () => {
    console.log(`Server is listening on http://${HOST}:${PORT}`);
});