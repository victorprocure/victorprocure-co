const timeout = ms => new Promise(res => setTimeout(res, ms));


export default async (page) => {
    await timeout(5000);

    return ["This", "is", "a", "few", "alerts"];
}