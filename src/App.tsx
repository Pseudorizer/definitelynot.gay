function App() {

    const text = (text: string, size = "text-7xl") => {
        return <h1 className={`${size} font-bold text-center`}>{text}</h1>
    }

    return (
        <div className="flex items-center h-full pt-2 flex-col gap-12">
            {text('the person who sent YOU this')}
            {text('wants you to know')}
            {text('THEY ARE NOT')}
            {text('GAY', 'text-9xl')}
            {text('100% STRAIGHT')}
            {text('as STRAIGHT an an arrow')}
            {text('no POSSIBILITY of them being GAY')}
            {text('you could search an INFINITE number of multiverses')}
            {text('and there will be NO GAY copies of them')}
            {text('we just discovered the FIFTH law of thermodynamics')}
            {text('and it\'s that this person CANNOT BE GAY')}
            {text('when ALIENS communicate with us')}
            {text('they\'ll include the fact that this person')}
            {text('IS NOT GAY', 'text-9xl')}
            {text('it is a universal constant like prime numbers')}
            {text('still not convinced?')}
            {text('i just got my gaydar recalibrated')}
            {text('and there IS NOTHING on it, nada')}
        </div>
    );
}

export default App;
