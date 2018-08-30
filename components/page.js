import Header from './header';

export default ({ children, alerts }) => (
    <div className="main-container">
        <Header />
        <p>{alerts}</p>
        <div className="main-page">
            {children}
        </div>
    </div>
)