const calcProgress = (total: number, done: number) => {
    return { total, done, percent: total === 0 ? 0 : Math.round((done / total) * 100) }
};

export default calcProgress;