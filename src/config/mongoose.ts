import mongoose from "mongoose";

const connections :any = {}

export default (url: string) => {
    if (!connections[url]) {
        connections[url] = mongoose.createConnection(url, {

            // monitorCommands: true,
        })
        // connections[url] = new Promise((resolve, reject) => {
        //     mongoose
        //         .connect(url, {
        //             monitorCommands: true,
        //         })
        //         .then(resolve)
        //         .catch(reject);
        // })

        console.log(url);

        connections[url].on('connected', () => {
            console.info('database connected', url)
        })
    }

    return connections[url]
};
