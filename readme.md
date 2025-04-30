# Présentation du projet

Avant chaque début d'édition du code taper dans le terminal :
npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch

## Technologies utilisées

[NodeJS](https://nodejs.org/fr)
[Tailwind CSS](https://tailwindcss.com/plus)

## Sites références

[Comptoir des voyages](https://www.comptoirdesvoyages.fr/)
[Havas voyages](https://www.havas-voyages.fr/)

## Ressources

[Widget Meteo](https://weatherwidget.org/fr/)
[Leaflet](https://leafletjs.com/)

*Images* :
[Pexels](https://www.pexels.com/fr-fr/)
- (https://www.pexels.com/fr-fr/photo/paysage-montagnes-nature-nature-sauvage-14339516/)
[Shopify Burst](https://www.shopify.com/stock-photos)
[Freepik](https://fr.freepik.com/)
[Pixabay](https://pixabay.com/fr/)

*Logo(s)* :
[Icones](https://icones8.fr/icons)
[PostMyWall](https://fr.postermywall.com/)






<!-- ----------advise section-------------- -->
    <section id="advise">
        <div class="advise_title">
            <h4>Conseils<br> pratiques</h4>
        </div>
        <div class="advise_content">
            <p><strong>Préparer son sac, </strong>les essentiels pour des terrains sauvages et imprévisibles.</p>
            <p><strong>Voyager responsable, </strong>Comment minimiser son impact environnemental et soutenir les communautés locales.</p>
            <p><strong>Trouver des vols moins chers, </strong>Astuces pour explorer l'inattendu sans vider son compte bancaire.</p>
        </div>
    </section>

<!-- ----------blog section-------------- -->
    <section id="blog">
        <h3>Blog d'aventure</h3>
        <article class="blog_content">
            <p><strong>Article 1 :</strong> Dans les jungles oubliées de Bornéo : un voyage au cœur de la nature sauvage</p>
            <p><strong>Article 2 :</strong>  le Transsibérien : une aventure au rythme des rails.</p>
            <p><strong>Article 3 :</strong> "Histoires autour du feu : récits d'aventuriers.</p>
        </article>
    </section>

<!-- ----------services section--------------- -->
    <section id="services">
        <h3>Nos services</h3>
        <div class="box_services_A">
            <figure class="service">
                <figcaption class="service_content">
                    <h5>Voyages Personnalisés</h5>
                    <p>Chaque voyage est conçu selon vos besoins spécifiques.</p>
                </figcaption>
                <img src="img/service_perso.png" alt="service">
            </figure>
            <figure class="service">
                <img src="img/service_loca.png" alt="service">
                <figcaption class="service_content">
                    <h5>Assurance voyage</h5>
                    <p>Voyagez en toute sérénité avec nos solutions d'assurance</p>
                </figcaption>
            </figure>
        </div>
        <div class="box_services_B">
            <figure class="service">
                <img src="img/service_loca.png" alt="service">
                <figcaption class="service_content">
                    <h5>Locations</h5>
                    <p>Des hébergements et des motorisations de qualité pour votre confort.</p>
                </figcaption>
            </figure>
            <figure class="service">
                <figcaption class="service_content">
                    <h5>Assistance 24/7</h5>
                    <p>Nous sommes là pour vous, avant, pendant et après votre voyage</p>
                </figcaption>
                <img src="img/service_assist.png" alt="service">
            </figure>
            <figure class="service">
                <figcaption class="service_content">
                    <h5>Prix Compétitifs</h5>
                    <p>Vivez des aventures uniques sans casser la banque.</p>
                </figcaption>
                <img src="img/service_price.png" alt="service">
            </figure>
        </div>     
    </section>

<!-- ------customer reviews section----------- -->
    <section id="customer_reviews">
        <h3>Ce que disent nos clients</h3>
        <div class="box_reviews">
            <figure class="review">
                <img src="img/reviewer_photo (1).png" alt="photo costomer review">
                <figcaption class="review_content">
                    <h5>O. Nord</h5>
                    <p>⭐⭐⭐⭐⭐</p>
                    <p>Très impatiente d’y retourner, allez visiter l’Amazonie sauvage</p>
                </figcaption>
            </figure>
            <figure class="review">
                <img src="img/reviewer_photo (2).png" alt="photo costomer review">
                <figcaption class="review_content">
                    <h5>H. Paul</h5>
                    <p>⭐⭐⭐⭐⭐</p>
                    <p>Une expérience authentique et inoubliable.</p>
                </figcaption>
            </figure>
            <figure class="review">
                <img src="img/reviewer_photo (3).png" alt="photo costomer review">
                <figcaption class="review_content">
                    <h5>M. Marie</h5>
                    <p>⭐⭐⭐⭐⭐</p>
                    <p>Un voyage incroyable dans des lieux que je n'aurais jamais imaginés !</p>
                </figcaption>
            </figure>
            <figure class="review">
                <img src="img/reviewer_photo (4).png" alt="photo costomer review">
                <figcaption class="review_content">
                    <h5>T. Mathieu</h5>
                    <p>⭐⭐⭐⭐⭐</p>
                    <p>Tokyo était incroyable, ses sources chaudes. Allez essayer !</p>
                </figcaption>
            </figure>
        </div>
    </section>

      <!------------------ Contact section --------------->
    <section id="contact" class="flex flex-col w-full py-20 bg-[#D9D9D9]">
        <h2 class="text-center text-[40px] font-['montserrat-extrabold'] text-[#333]">Besoin d'un dévis,<br><span class="text-[28px] font-['montserrat-bold'] text-[#3E3E3E]">Laissez-nous un message</span></h2>
        <div class="items-center m-12 mx-auto w-[550px] rounded-3xl bg-white shadow-2xl">
            <article class="mt-1 font-['montserrat-bold'] text-[20px] text-[#3F3E3E]">
                <label for="message" class="flex items-center justify-center">Votre message / votre demande</label>
                <textarea id="message" placeholder="Bonjour !!! Pensez bien à signer votre message (Nom)😃" class="w-[535px] h-[100px] text-[18px] font-['montserrat-medium'] mx-2 p-[10px] mt-2 border-none rounded-l-3xl rounded-tr-3xl focus:outline-none focus:ring-1 focus:ring-indigo-800"></textarea>
            </article>

            <article class="rounded-br-2xl w-[550px]">
                <input type="email" id="email" placeholder="Votre adresse e-mail" class="w-[405px] text-[18px] font-['montserrat-medium'] mx-2 border-none rounded-l-3xl rounded-tr-3xl shadow-[0px_10px_30px_rgba(0,0,0,0.5)] bg-white border focus:outline-none focus:ring-1 focus:ring-indigo-800 p-2.5">
                <button type="submit" class="rounded-br-3xl rounded-tl-3xl text-white font-['montserrat-bold'] py-[9px] px-[20px] text-[20px] bg-[#3E3E3E] hover:bg-[#131C46] transition duration-300">Envoyer</button>
            </article>
        </div>
    </section>

    <!---------------------Footer------------------------>
    <footer class="bg-[#D9D9D9]" >
        <div class="flex w-full items-center flex-row gap-[50px] justify-center">
            <div class="gap-[50px] mb-[40px]">
                <article class="flex text-left gap-[50px] text-[#333] flex-wrap mb-[40px] ">
                    <figure>
                        <h3 class="font-['montserrat-bold'] text-[20px] ">Nos destinations</h3>
                        <ul class="font-['montserrat-medium'] text-[17px] mt-[10px] leading-[30px]">
                            <li><a href="#" class="transition-colors duration-300 hover:text-[#131c46] hover:font-bold">Nouvelle-guinée</a></li>
                            <li><a href="#" class="transition-colors duration-300 hover:text-[#131c46] hover:font-bold">Egypte</a></li>
                            <li><a href="#" class="transition-colors duration-300 hover:text-[#131c46] hover:font-bold">Amazonie</a></li>
                            <li><a href="#" class="transition-colors duration-300 hover:text-[#131c46] hover:font-bold">Japon</a></li>
                            <li><a href="#" class="transition-colors duration-300 hover:text-[#131c46] hover:font-bold">Australie</a></li>
                            <li><a href="#" class="transition-colors duration-300 hover:text-[#131c46] hover:font-bold">Kenya</a></li>
                            <li><a href="#" class="transition-colors duration-300 hover:text-[#131c46] hover:font-bold">Congo</a></li>
                        </ul>
                    </figure>

                    <figure>
                        <h3 class="font-['montserrat-bold'] text-[20px] ">Nos services</h3>
                        <ul class="font-['montserrat-medium'] text-[17px] mt-[10px] leading-[30px]">
                            <li><a href="#" class="transition-colors duration-300 hover:text-[#131c46] hover:font-bold">Voyage personnalisé</a></li>
                            <li><a href="#" class="transition-colors duration-300 hover:text-[#131c46] hover:font-bold">Assurance voyage</a></li>
                            <li><a href="#" class="transition-colors duration-300 hover:text-[#131c46] hover:font-bold">Location hôtel</a></li>
                            <li><a href="#" class="transition-colors duration-300 hover:text-[#131c46] hover:font-bold">Assistance 24/7</a></li>
                            <li><a href="#" class="transition-colors duration-300 hover:text-[#131c46] hover:font-bold">Prix compétitifs</a></li>
                        </ul>
                    </figure>

                    <figure>
                        <figcaption>
                            <h3 class="font-['montserrat-bold'] text-[20px] ">Contacts</h3>
                            <p class="font-['montserrat-medium'] text-[17px] mt-[10px] leading-[30px]">
                                <a href="#contact" class="transition-colors duration-300 hover:text-[#131c46] hover:font-bold">Fix : (+33) 01 23 45 67 89</a><br>
                                <a href="#contact" class="transition-colors duration-300 hover:text-[#131c46] hover:font-bold">Courriel : evasion@voyage.fr</a><br>
                                <a href="#contact" class="transition-colors duration-300 hover:text-[#131c46] hover:font-bold">Courrier : 4 evasion, 58000</a>
                            </p>
                        </figcaption>

                        <figcaption>
                            <h3 class="font-['montserrat-bold'] text-[20px] mt-[20px]">Nos partenaires</h3>
                            <p class="font-['montserrat-medium'] text-[17px] mt-[10px] leading-[30px]">
                                <a href="#" class="transition-colors duration-300 hover:text-[#131c46] hover:font-bold">Evasion Airlines</a><br>
                                <a href="#" class="transition-colors duration-300 hover:text-[#131c46] hover:font-bold">Evasion Touristique</a>
                            </p>
                        </figcaption>
                    </figure>

                    <figure>
                        <h3  class="font-['montserrat-bold'] text-[20px]">Langues</h3>
                        <ul class="font-['montserrat-medium'] text-[17px] mt-[10px] leading-[30px]">
                            <li><a href="index.html" class="transition-colors duration-300 hover:text-[#131c46] hover:font-bold">Français</a></li>
                            <li><a href="en.html" class="transition-colors duration-300 hover:text-[#131c46] hover:font-bold">English</a></li>
                            <li><a href="jpn.html" class="transition-colors duration-300 hover:text-[#131c46] hover:font-bold">日本語</a></li>
                        </ul>
                    </figure>
                </article>

                <article class="flex items-center gap-[40px] justify-center flex-wrap">
                    <h3 class="font-['montserrat-bold'] text-[20px]">Moyens de paiements acceptés</h3>
                    <a href="https://www.paypal.com/fr/home"><img title="Paypal" src="footer_edit/img/logo_paypal.svg" alt="Footer logo" class="w-[45px] object-center my-auto flex-shrink-0 transition-transform duration-300 ease-in-out hover:scale-110"></a>
                    <a href="https://www.mastercard.fr/fr-fr.html"><img title="Mastercard" src="footer_edit/img/logo_mastercard.svg" alt="Footer logo" class="w-[45px] object-center my-auto flex-shrink-0 transition-transform duration-300 ease-in-out hover:scale-110"></a>
                    <a href="https://www.visa.fr/"><img title="Visa" src="footer_edit/img/logo_visa.svg" alt="Footer logo" class="w-[45px] object-center my-auto flex-shrink-0 transition-transform duration-300 ease-in-out hover:scale-110"></a>
                </article>

                <article class="flex items-center gap-[40px] justify-center flex-wrap">
                    <a href="#"><img src="footer_edit/img/explore_with_us-no_bg.svg" alt="Footer logo" class="w-[200px] object-center my-auto flex-shrink-0 transition-transform duration-300 ease-in-out hover:scale-110"></a>
                    <h3 class="font-['montserrat-bold'] text-[20px]">Restez connectés</h3>
                    <a href="https://www.whatsapp.com/?lang=fr_FR"><img title="Whatsapp" src="footer_edit/img/logo_whatsapp.svg" alt="Footer logo" class="w-[45px] object-center my-auto flex-shrink-0 transition-transform duration-300 ease-in-out hover:scale-110"></a>
                    <a href="https://x.com/Accueil"><img title="TwitterX" src="footer_edit/img/logo_twitterx.svg" alt="Footer logo" class="w-[45px] object-center my-auto flex-shrink-0 transition-transform duration-300 ease-in-out hover:scale-110"></a>
                    <a href="https://www.facebook.com/"><img title="Facebook" src="footer_edit/img/logo_facebook.svg" alt="Footer logo" class="w-[45px] object-center my-auto flex-shrink-0 transition-transform duration-300 ease-in-out hover:scale-110"></a>
                    <a href="https://www.instagram.com/"><img title="Instagram" src="footer_edit/img/logo_instagram.svg" alt="Footer logo" class="w-[45px] object-center my-auto flex-shrink-0 transition-transform duration-300 ease-in-out hover:scale-110"></a>
                </article>
            </div>
            <div class="w-[360px] mt-[-60px]">
                <h2 class="font-['montserrat-bold'] text-[38px] text-[#333] mb-[10px]">À propos de nous</h2>
                <p class="font-['poppins-medium'] text-[15px] text-[#3E3E3E] text-justify mt-[10px] leading-[28px]">
                    Depuis des années, nous rêvons d'inspirer des voyageurs à dépasser les frontières classiques des guides touristiques. 
                    Notre objectif est simple : révéler la beauté cachée du monde et célébrer la diversité de la planète.<br><br> 
                    Nous sommes une équipe de passionnés de voyage, d'aventuriers dans l'âme, qui avons eu la chance d'explorer des 
                    contrées reculées, des jungles profondes aux montagnes isolées. Chaque récit et suggestion de notre site est le 
                    fruit de notre expérience et de notre amour pour le voyage authentique.
                </p>
            </div>
        </div>

        <p class="font-['montserrat-medium'] text-[15px] text-center">
            <a href="#" class="transition-colors duration-300 hover:text-[#131c46] hover:font-bold">Mentions légales &nbsp;&nbsp;&nbsp; I &nbsp;&nbsp;&nbsp;</a>
            <a href="#" class="transition-colors duration-300 hover:text-[#131c46] hover:font-bold">Données personneles &nbsp;&nbsp;&nbsp; I &nbsp;&nbsp;&nbsp;</a>
            <a href="#" class="transition-colors duration-300 hover:text-[#131c46] hover:font-bold">CGV &nbsp;&nbsp;&nbsp; I &nbsp;&nbsp;&nbsp;</a>
            <a href="#" class="transition-colors duration-300 hover:text-[#131c46] hover:font-bold">©évasion_voyage_by_C&S</a>
        </p>
    </footer>

