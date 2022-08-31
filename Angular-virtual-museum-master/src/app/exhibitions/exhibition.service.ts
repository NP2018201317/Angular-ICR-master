import { EventEmitter } from '@angular/core';
import { Exhibit } from './exhibit.model';
import { Exhibition } from './exhibition.model';

export class ExhibitionService {
  exhibitionSelected = new EventEmitter<Exhibition>();

  static Exhibitions: Exhibition[] = [
    new Exhibition(
      0,
      'Izlozba "Van Gog"',
      'Postinmpresionizam',
      'https://iiif.micr.io/pMtwg/full/600,/0/default.webp',
      4,
      20,
      45,
      [
        new Exhibit(
          0,
          'Ljudi koji jedu krompir',
          'Ljudi koji jedu krompir (hol. De Aardappeleters) je slika, ulje na platnu, holandskog umetnika Vinsenta van Goga naslikana aprila 1885. u Nuenenu, Holandija. Nalazi se u Muzeju Van Goga u Amsterdamu. Originalna skica ulja na platnu nalazi se u Muzeju Kroler-Muler u Oterlou, a takođe je napravio litografije slike koja se nalazi u kolekcijama, uključujući Muzej moderne umetnosti u Njujorku. Slika se smatra jednim od Van Gogovih remek-dela.',
          '../../assets/images/The Potato Eaters.webp',
          500,
          4.2,
          'Holandija'
        ),
        new Exhibit(
          1,
          'Zuta kuca',
          'Žuta kuća, alternativno nazvana Ulica, je ulje na platnu iz 1888. holandskog postimpresionističkog slikara Vinsenta van Goga iz 19. veka. Kuća je bila desno krilo 2 Place Lamartine, Arl, Francuska, gde je 1. maja 1888. Van Gog iznajmio četiri sobe.',
          '../../assets/images/The Yellow House.webp',
          900,
          3.3,
          'Holandija'
        ),
        new Exhibit(
          2,
          'Sejač',
          'Sejač (hol. De zaaier) slika je, koju je naslikao Vinsent van Gog 1889. godine tehnikom ulja na platnu. Nalazi se u Van Gogovom Muzeju u Amsterdamu. Ova slika se naslikana po ugledu na slikuŽana Fransoa Mijea iz 1850. jer je on bio veliki idol Vinsentu. Naslikana je početkom osamdesetih godina 19. veka. Slikao je pretežno religiozne teme i ova slika je jedna od njih. Sejač je kao Božji izaslanik na Zemlji.',
          '../../assets/images/The Sower.webp',
          1200,
          4.6,
          'Holandija'
        ),
        new Exhibit(
          3,
          'Bademovo drvo u cvetu',
          'Cvetovi badema su grupa od nekoliko slika koje je 1888. i 1890. godine uradio Vincent van Gogh u cvetićem badema u Arlesu i Saint-Remi-u u južnoj Francuskoj. Cvetno drveće bilo je posebno za Van Gogha. Predstavljali su buđenje i nadu. Uživao je u njima estetski i radost je pronalazio u slikanju cvetajućeg drveća.',
          '../../assets/images/almond blossis.webp',
          800,
          4.3,
          'Francuska'
        ),
      ]
    ),
    new Exhibition(
      1,
      'Srpsko slikarstvo iz 18. i 19. veka',
      'Barok',
      '../../assets/images/Sl-4-Katarina-Ivanovic-Italijanski-vinogradar-1842-1.jpg',
      3,
      10,
      20,
      [
        new Exhibit(
          0,
          'Utopljenica',
          'Utopljenica je nastala u Minhenu 1879. godine, iz crteža urađenog 1876, kao likovni komentar na stihove Jovana Jovanovića Zmaja kojim je opisao događaje iz Bosansko – hercegovačkog ustanka: Šta je bilo? Nije ništa. Evropi na ugled. Krstić je svoje delo prvi put predstavio javnosti u Minhenu na izložbi Akademije, gde je i nagrađen bronzanom medaljom. Ovom slikom Đorđe Krstić ulazi u srpsku istoriju umetnosti i kulturni život devetnaestovekovne Srbije.',
          '../../assets/images/Sl-11-Djordje-Krstic-Utopljenica-1879-1.jpg',
          650,
          4.1,
          'Srbija'
        ),
        new Exhibit(
          1,
          'Apoteoza',
          'Apoteoza Lukijana Mušickog, jedna je od najveštijih kompozicija ovog slikara koja se svojom tematikom, veštinom i bojama ističe i privlači pogled.',
          '../../assets/images/Sl-2-Dimitrije-Avramovic-Apoteoza-Lukijana-Musickog-1840-1.jpg',
          400,
          3.8,
          'Srbija'
        ),
        new Exhibit(
          2,
          'Hercegovacki begunci',
          'Једна од најпознатијих слика српског сликара реализма Уроша Предића, инспирисана је херцеговачком буном која је избила у околини Невесиња 1875.године. ',
          '../../assets/images/Uros-Predic-Hercegovac-ki-begunci-1889-ulje-na-platnu-1145x1485cm.jpg',
          250,
          4.8,
          'Srbija'
        ),
      ]
    ),
    new Exhibition(
      2,
      'Izlozba "Salvador Dali"',
      'Nadrealizam',
      '../../assets/images/dali.webp',
      4,
      15,
      60,
      [new Exhibit(
        0,
        'Smeštaj požude',
        'Na prvi pogled se čini da je naslikana uljem na platnu. Zapravo, ovo delo je sastavljeno od nauljanog kolaža i odštampanog papira (iz neke knjige priča) na kartonu. Delo je verovatno nastalo na početku Dalijeve afere sa Galom, ženom Pola Elijara, pionira nadrealističkog pokreta, koja će se kasnije udati za Dalija. Ovo umetničko delo koje u sebi meša razne nasumične slike onačava izraz Dalijeve seksualne anksioznosti i dubokih strahova vezanih za izdaju.',
        '../../assets/images/slika2-1-550x348-1.webp',
        1550,
        4.4,
        'Spanija'
      ),
      new Exhibit(
        1,
        'Upornost sećanja',
        '„Upornost sećanja“ najverovatnije predstavlja jednu od najboljih primera slikarstva nadrealističkog pokreta. Slika opisuje vreme predstavljeno raznim satovima koji se tope. Na sredini slike se nalazi gotovo neprepoznatiljivo obličje čoveka koji leži na goloj zemlji. Dali je naslikao „Upornost sećanja“ kada je imao dvadeset i sedam godina. Retko koje Dalijevo delo je postiglo ovoliku popularnost u njegovoj daljoj karijeri.',
        '../../assets/images/satovi.webp',
        480,
        4.8,
        'Spanija'
      ),
      new Exhibit(
        2,
        'Nekrofilično proleće',
        '„Nekrofilično proleće“ je toliko baršunasto oslikano da se čini nekompletnim. Na levoj strani slike nalazi se muška figura koja sedi u pesku, u daljini se vidi nekoliko skromnih kuća. To su verovatno domovi likova koji su naslikani. Fokus pada na ženu koja nosi krunu od cveća i koja izgleda kao da se krije iza drveta čempresa. Desna strana slike podseća na neku nejasnu halucinaciju. Ovo delo predstavlja pravi primer nadrealizma. Ono oslikava prelaz iz realističnih prikaza u sferu podsvesti i snova.',
        '../../assets/images/slika5-1.webp',
        930,
        4.6,
        'Spanija'
      ),
      new Exhibit(
        3,
        'Dezintegracija secanja',
        '„La Desintegracion de la Persistencia de la Memoria ili Dezintegracija postojanosti sećanja je slika na platnu španskog nadrealiste Salvadora Dalija. To je 1954. godine re-kreacija čuvenog umetničkog dela iz 1931. godine „Upornost sećanja“',
        '../../assets/images/the-disintegration-of-the-persistence-of-memory.jpg',
        270,
        4.1,
        'Spanija'
      ),
    ]
    ),
    
  ];

  getExhibition(id: number) {
    return ExhibitionService.Exhibitions[id];
  }

  getExhibitions() {
    return ExhibitionService.Exhibitions.slice();
  }

  getExhibit(id: number) {
    if (id == ExhibitionService.Exhibitions[id].id) {
      return ExhibitionService.Exhibitions[id].exhibits;
    } else {
      return [];
    }
  }

  createExhibition(name: string, category: string, imagePath: string, price: number, time: number,): Exhibition {
    var maxId: number = 0;
    ExhibitionService.Exhibitions.forEach(exhibition => {
      if (maxId < exhibition.id) {
        maxId = exhibition.id;
      }
    });

    var id = ++maxId;
    var exhibits = <Exhibit[]>[];
    var numberOfExhibits = exhibits.length;
    var exhibition: Exhibition = new Exhibition(id, name, category, imagePath, numberOfExhibits, price, time, exhibits);

    ExhibitionService.Exhibitions.push(exhibition);

    console.log(exhibition);
    return exhibition;
  }
}
