import CarCard from '../../components/CarCard';
import CommentCard from '../../components/CommentCard';
import Footer from '../../components/Footer';
import Header from '../../components/Header'
import './styles.css'

export default function Catalog() {

    return (
        <>
            <Header />
            <main>
                <section id="catalog-section" className="dct-container">
                    <h2>Venha nos visitar</h2>
                    <div className="">
                        <CarCard />
                        <CarCard />
                    </div>

                </section>

                <section id="comments-and-footer-section" className="dct-container dct-comments-color">
                    <div className="title-comments">
                        <h2>O que estão dizendo</h2>
                    </div>

                    <div className="">
                        <CommentCard />
                        <CommentCard />
                        <CommentCard />
                        <CommentCard />
                        <CommentCard />
                    </div>

                </section>

                <Footer />


            </main>

        </>
    );
}
