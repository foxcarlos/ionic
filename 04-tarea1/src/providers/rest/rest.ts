import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Observable
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class RestProvider {

  // baseUrl:string = 'http://ec2-18-236-66-28.us-west-2.compute.amazonaws.com:8069'
  baseUrl:string = 'http://localhost:8069'

  // peliculas: ArchivoSubir[] = [];
  peliculas: algo[] = [];

  constructor(private httpClient: HttpClient) {
    console.log('Hello RestProvider Provider');

    this.getPeliculas()
      .subscribe( (response)=>{
        console.log('Personajes', response);
      },
      (err) =>{
        console.log('Ocurrio un Error:', err);
      }
    );
  }

  public getPeliculas(): Observable<Product> {
    console.log('Entro a getPeli');
    
    return this.httpClient
      .get(this.baseUrl + '/centrocultural/eventoshoy')
      .map((response:any) => {
          console.log('response:',response);
          
          for (const item of response) {
            let item2 = item;
            console.log('item2', item2.address_id[1]);
            this.peliculas.push(item);
          }
          return new Product(response);
      })
  }

}

export class Product {
  id: number;
  name: string;
  cost: number;
  quantity: number;

  constructor(values: Object = {}) {
       Object.assign(this, values);
  }
}

interface ArchivoSubir{
    categoria: string,
    clase: string,
    fecha_hoy: string,
    horario_hoy: string,
    idioma: string,
    [lista_de_funciones: string]: any;
    resumen: string,
    sala_hoy: string,
    titulo_original: string,
    trailer: string,
    titulo: string,
    url_imagen: string,
}

interface algo {
  __last_update: string,
 active: boolean,
 address_id: [],
 allowed_track_tag_ids:[],
 auto_confirm: boolean,
 badge_back: string,
 badge_front: string,
 badge_innerleft: string,
 badge_innerright: string,
 clase: string,
 color: string,
 company_id: [],
 create_date: string,
 create_uid: [],
 date_begin: [],
 date_begin_located: string,
 date_end: string,
 date_end_located: string,
 date_tz: string,
 description: string,
 display_name: string,
 event_logo: string,
 event_mail_ids: [],
 event_ticket_ids: [],
 event_type_id: [],
 id: number,
 idioma: string,
 is_online: boolean,
 is_participating: boolean,
 is_published: boolean,
 is_seo_optimized: boolean,
 lista_de_funciones: [],
 menu_id: [],
 message_attachment_count: number,
 message_channel_ids: [],
 message_follower_ids: [],
 message_has_error: boolean,
 message_has_error_counter: number,
 message_ids: [],
 message_is_follower: boolean,
 message_main_attachment_id: [],
 message_needaction: boolean,
 message_needaction_counter: number,
 message_partner_ids: [],
 message_unread: boolean,
 message_unread_counter: number,
 name: string,
 organizer_id: [],
 registration_ids: [],
 sala_id: [],
 seats_availability: string,
 seats_available: number,
 seats_expected: number,
 seats_max: number,
 seats_min: number,
 seats_reserved: number,
 seats_unconfirmed: number,
 seats_used: number,
 sponsor_count: number,
 sponsor_ids: [],
 state: string,
 titulo_original: string,
 track_count: number,
 track_ids: [],
 track_menu_ids: [],
 track_proposal_menu_ids: [],
 tracks_tag_ids: [],
 twitter_hashtag: string,
 url_imagen: string,
 url_trailer: string,
 user_id: [],
 website_id: [],
 website_menu: [],
 website_message_ids: [],
 website_meta_description: string,
 website_meta_keywords: string,
 website_meta_og_img: string,
 website_meta_title: string,
 website_published: string,
 website_track: string,
 website_track_proposal: string,
 website_url: string,
 write_date: string,
 write_uid: []
}
 
 




 /*
{'__last_update': datetime.datetime(2018, 12, 2, 6, 2, 37, 719837),
 'active': True,
 'address_id': (41, 'Centro Cultural Cotesma'),
 'allowed_track_tag_ids': [],
 'auto_confirm': False,
 'badge_back': False,
 'badge_front': False,
 'badge_innerleft': False,
 'badge_innerright': False,
 'clase': 'Apta para Todo Público',
 'color': 0,
 'company_id': (1, 'YourCompany'),
 'country_id': False,
 'create_date': datetime.datetime(2018, 12, 2, 3, 25, 4, 775318),
 'create_uid': (1, 'OdooBot'),
 'date_begin': datetime.datetime(2018, 12, 2, 21, 0),
 'date_begin_located': 'Dec 2, 2018, 6:00:00 PM',
 'date_end': datetime.datetime(2018, 12, 2, 23, 0),
 'date_end_located': 'Dec 2, 2018, 8:00:00 PM',
 'date_tz': 'America/Argentina/Buenos_Aires',
 'description': '<p>Cada año, en Navidad, los lugareños perturban su pacífica soledad con celebraciones cada vez más desmesuradas, luminosas y ruidosas. Cuando los Quién declaran que ese año van a preparar una Navidad el triple de grande, el Grinch se da cuenta de que solo hay un modo de recuperar algo de paz y silencio: robar la Navidad. Para ello, decide hacerse pasar por Santa Claus en Nochebuena, haciéndose con un reno muy peculiar para tirar de su trineo. Mientras tanto, en Villa Quién, una dulce niña llamada Cindy-Lou, desbordante de espíritu navideño, planea con sus amigos atrapar a Santa Claus durante su visita en Nochebuena para darle las gracias por ayudar a su trabajadora madre. Sin embargo, a medida que se acerca la noche mágica, sus buenas intenciones amenazan con chocar con las del Grinch, mucho más perversas. ¿Logrará Cindy-Lou cumplir su deseo de conocer a Santa Claus? ¿Conseguirá el Grinch poner fin al jolgorio navideño de los Quién de una vez por todas?</p>',
 'display_name': 'El Grinch - 3D (2018-12-02 - 2018-12-03)',
 'event_logo': False,
 'event_mail_ids': [],
 'event_ticket_ids': [],
 'event_type_id': (8, 'Cine'),
 'id': 109,
 'idioma': 'En Castellano',
 'is_online': False,
 'is_participating': False,
 'is_published': False,
 'is_seo_optimized': False,
 'lista_de_funciones': "['DOM 02 18:00hs.', 'MAR 04 18:00hs.', 'MIé 05 18:00hs.']",
 'menu_id': False,
 'message_attachment_count': 0,
 'message_channel_ids': [],
 'message_follower_ids': [554, 555, 556],
 'message_has_error': False,
 'message_has_error_counter': 0,
 'message_ids': [640, 638],
 'message_is_follower': True,
 'message_main_attachment_id': False,
 'message_needaction': False,
 'message_needaction_counter': 0,
 'message_partner_ids': [2, 42, 41],
 'message_unread': False,
 'message_unread_counter': 0,
 'name': 'El Grinch - 3D',
 'organizer_id': (41, 'Centro Cultural Cotesma'),
 'registration_ids': [],
 'sala_id': (7, 'Auditorio'),
 'seats_availability': 'unlimited',
 'seats_available': 0,
 'seats_expected': 0,
 'seats_max': 0,
 'seats_min': 0,
 'seats_reserved': 0,
 'seats_unconfirmed': 0,
 'seats_used': 0,
 'sponsor_count': 0,
 'sponsor_ids': [],
 'state': 'confirm',
 'titulo_original': 'Apta para Todo Público ',
 'track_count': 0,
 'track_ids': [],
 'track_menu_ids': [],
 'track_proposal_menu_ids': [],
 'tracks_tag_ids': [],
 'twitter_hashtag': False,
 'url_imagen': 'https://image.tmdb.org/t/p/w780/zRDkmww7Bu11wiz2g86RxSreiY4.jpg',
 'url_trailer': 'https://www.youtube.com/embed/N2lzGmhf0yY?rel=0&showinfo=0',
 'user_id': (8, 'Centro Cultural Cotesma'),
 'website_id': False,
 'website_menu': False,
 'website_message_ids': [],
 'website_meta_description': False,
 'website_meta_keywords': False,
 'website_meta_og_img': False,
 'website_meta_title': False,
 'website_published': False,
 'website_track': False,
 'website_track_proposal': False,
 'website_url': '/event/el-grinch-3d-2018-12-02-2018-12-03-109',
 'write_date': datetime.datetime(2018, 12, 2, 6, 2, 37, 719837),
 'write_uid': (2, 'Mitchell Admin')}
 
 */
