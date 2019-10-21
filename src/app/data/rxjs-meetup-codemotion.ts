export const RXJS_MEETUP_CODEMOTION = [
  {
    author: 'Fabio Biondi',
    thumb: 'speaker_biondi.png',
    snippets: [
      {
        title: 'Multicast with share() operator and Subject',
        desc: 'Utilizzare il multicast con l\'operatore share() e le subject',
        urlStart: null,
        urlFinal: 'https://stackblitz.com/edit/meetup-rxjs-rxjs-snippet-share-multicast?file=src/app/app.component.ts',
      },
      {
        title: 'Differenze tra le tipologie di Subject',
        desc: null,
        urlStart: null,
        urlFinal: 'https://stackblitz.com/edit/rxjs-angular-subject-vs-behavior-vs-replay-vs-async?file=src/app/app.component.ts',
      },
      {
        title: 'Subject as Observer',
        desc: null,
        urlStart: null,
        urlFinal: 'https://stackblitz.com/edit/rxjs-angular-subject-as-observer?file=src%2Fapp%2Fapp.component.ts',
      }
    ]
  },

  {
    author: 'Michele Stieven',
    thumb: 'speaker_stieven.png',
    snippets: [
      {
        title: 'Utilizzo dei Subject come stato applicativo (di un’applicazione Angular)',
        desc: 'Creazione di un servizio “Facade” che espone il suo stato utilizzando BehaviorSubject e ReplaySubject. Utilizzo di Subject per gestire l’unsubscribe. Utilizzo di async pipe per evitare subscribe manuali nel container. (una roba semplice con una entità eh, nulla di che)',
        urlStart: 'https://stackblitz.com/edit/ng-rxjs-state',
        urlFinal: 'https://stackblitz.com/edit/ng-rxjs-state-after',
      },
      {
        title: 'Operatori di combinazione per definire degli stati derivati (continuazione del precedente)',
        desc: 'Utilizzo di catchError per reagire agli errori in due modi diversi: con l’utilizzo di BehaviorSubject, oppure con dei Subject. Spiegazione di dove utilizzare catchError e dove no. Infine, piccola menzione sull’ErrorHandler di Angular.',
        urlStart: null,
        urlFinal: 'https://stackblitz.com/edit/rxjs-combination-states',
      },
      {
        title: 'Gestione degli errori nello stato applicativo',
        desc: 'Utilizzo di operatori di combinazione (merge, combineLatest, withLatestFrom, e pure switchMap) per la creazione di stati derivati e abolire per sempre le variabili d’istanza. Vari esempi partendo dal tip precedente, accennando anche a socket/firebase/real-time.',
        urlStart: null,
        urlFinal: 'https://stackblitz.com/edit/ng-rxjs-state-after-errors',
      }
    ]
  },
  {
    author: 'Massimo Artizzu',
    thumb: 'speaker_artizzu.png',
    snippets: [
      {
        title: 'Reduce vs Scan',
        desc: 'utilizzare scan e reduce per accumulare valori',
        urlStart: null,
        urlFinal: 'https://stackblitz.com/edit/ng-reduce-vs-scan',
      },
      {
        title: 'Riprova… ma con calma',
        desc: 'andando oltre retry, vediamo come usare l’operatore retryWhen per rilanciare una richiesta con un ritardo di attesa. Confezioniamo tutto in un operatore custom per RxJS.',
        urlStart: null,
        urlFinal: 'https://stackblitz.com/edit/ng-retry-when',
      },
      {
        title: 'Osserviamo gli Input',
        desc: 'non è seccante che gli Output siano Observable ma gli Input niente del genere, costringendoci alla verbosità per reagire alle mutazioni di valore? Pareggiamo le differenze con l’aiuto delle peculiarità di TypeScript.',
        urlStart: null,
        urlFinal: 'https://stackblitz.com/edit/angular-streaming-inputs',
      }
    ]
  },
  {
    author: 'Antonio Gallo',
    thumb: 'speaker_gallo.png',
    snippets: [
      {
        title: 'Bootstrap di un applicazione mobile - parte 1',
        desc: 'Come realizzare un servizio in un tipico scenario di un’applicazione mobile in cui diverse tipologie di inizializzazioni sono necessarie all’avvio. Vedremo come organizzare in sequenza e in parallelo molteplici chiamate HTTP (switchMap, forkJoin, iif, defer, catchError) e altre operazioni (come accedere al GPS) dipendenti tra di loro.',
        urlStart: null,
        urlFinal: 'https://stackblitz.com/edit/angular-rxjs-bootstrap-mobile-use-case-1-simplified',
      },
      {
        title: 'Bootstrap di un applicazione mobile - parte 2',
        desc: 'Come attendere che l’inizializzazione di un servizio di cui posticipiamo l’inizializzazione termini correttamente, utilizzando BehaviorSubject, sia all’interno della nostra applicazione sia all’interno delle “guards”.',
        urlStart: null,
        urlFinal: 'https://stackblitz.com/edit/angular-rxjs-bootstrap-mobile-use-case-2',
      },
      {
        title: 'Come tracciare la direzione di scroll del mouse',
        desc: 'Come utilizzare l’operatore “pairwise” per tracciare la quantità e la direzione dello scroll verticale del mouse per mostrare/nascondere header durante la navigazione.',
        urlStart: null,
        urlFinal: 'https://stackblitz.com/edit/angular-rxjs-pairwise-scroll-direction',
      },
      {
        title: 'Progress bar di upload di immagini multiple',
        desc: 'Come utilizzare RxJS per creare una progress bar durante l’upload di immagini multiple. Vedremo diverse strategie (merge, concat e mergeAll) per testare diversi scenari (caricamento parallelo, sequenziale o batch).',
        urlStart: null,
        urlFinal: 'https://stackblitz.com/edit/angular-rxjs-forkjoin-progress-bar',
      }
    ]
  }
]
