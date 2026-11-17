import { HealthProblem, PantrySwapEntry } from '../types/remedy';

export const HEALTH_PROBLEMS: HealthProblem[] = [
  {
    id: 'cold',
    pillar: 'respiratory',
    name: { en: 'Cold & Blocked Nose', te: 'జలుబు & ముక్కు దిబ్బడ' },
    shortDesc: {
      en: 'Warm herbal infusions and steam care to ease nasal congestion and sneezing.',
      te: 'ముక్కు దిబ్బడ, తుమ్ములను తగ్గించే వెచ్చని కషాయాలు మరియు ఆవిరి చిట్కాలు.',
    },
    symptoms: [
      { id: 'runny_nose', label: { en: 'Runny nose', te: 'ముక్కు కారడం' } },
      { id: 'blocked_nose', label: { en: 'Blocked / stuffy nose', te: 'ముక్కు దిబ్బడ' } },
      { id: 'sneezing', label: { en: 'Frequent sneezing', te: 'తరచుగా తుమ్ములు' } },
      { id: 'mild_chills', label: { en: 'Mild chills & heaviness', te: 'తేలికపాటి చలి & తల భారం' } },
    ],
    remedies: [
      {
        id: 'cold_tulsi_kadha',
        title: { en: 'Tulsi, Ginger & Black Pepper Kadha', te: 'తులసి, అల్లం & మిరియాల కషాయం' },
        summary: {
          en: 'A soothing warm decoction that loosens nasal mucus and warms the upper airway.',
          te: 'శ్వాసనాళాన్ని వెచ్చబరిచి ముక్కు దిబ్బడ మరియు జలుబును తగ్గించే కషాయం.',
        },
        prepTimeMinutes: 10,
        reliefType: { en: 'Warm Herbal Drink', te: 'వెచ్చని కషాయం' },
        matchedSymptomIds: ['runny_nose', 'sneezing', 'mild_chills', 'blocked_nose'],
        ingredients: [
          {
            id: 'tulsi',
            name: { en: 'Fresh Tulsi (Holy Basil) leaves', te: 'తాజా తులసి ఆకులు' },
            quantity: { en: '8–10 washed leaves', te: '8–10 శుభ్రమైన ఆకులు' },
            alternative: {
              name: { en: 'Fresh Mint leaves or Dried Oregano', te: 'పుదీనా ఆకులు లేదా వాము ఆకు' },
              quantity: { en: '8 mint leaves or 1/2 tsp dried oregano', te: '8 పుదీనా ఆకులు లేదా 1/2 స్పూన్ వాము ఆకు' },
              note: {
                en: 'Mint offers a mild cooling airway opening when Tulsi is unavailable.',
                te: 'తులసి లేనప్పుడు పుదీనా లేదా వాము ఆకు ముక్కు దిబ్బడకు సహాయపడుతుంది.',
              },
            },
          },
          {
            id: 'ginger',
            name: { en: 'Fresh Ginger (crushed)', te: 'తాజా అల్లం (దంచినది)' },
            quantity: { en: '1-inch piece', te: '1 అంగుళం ముక్క' },
            alternative: {
              name: { en: 'Dry Ginger Powder (Sonth / Sonti)', te: 'సొంఠి పొడి' },
              quantity: { en: '1/4 teaspoon', te: '1/4 టీస్పూన్' },
              note: {
                en: 'Dry ginger is slightly stronger; use only 1/4 tsp per cup.',
                te: 'సొంఠి పొడి ఘాటుగా ఉంటుంది కాబట్టి పావు స్పూన్ సరిపోతుంది.',
              },
            },
          },
          {
            id: 'pepper',
            name: { en: 'Crushed Black Peppercorns', te: 'దంచిన నల్ల మిరియాలు' },
            quantity: { en: '3–4 peppercorns', te: '3–4 మిరియాలు' },
            alternative: {
              name: { en: 'Long Pepper (Pippali) or Cinnamon pinch', te: 'పిప్పళ్ల పొడి లేదా దాల్చినచెక్క' },
              quantity: { en: '1/4 tsp cinnamon powder', te: '1/4 టీస్పూన్ దాల్చినచెక్క పొడి' },
              note: {
                en: 'Cinnamon adds gentle warmth without sharp spice.',
                te: 'మిరియాలు లేకపోతే దాల్చినచెక్క తగిన వెచ్చదనాన్ని ఇస్తుంది.',
              },
            },
          },
          {
            id: 'honey',
            name: { en: 'Raw Honey (stirred in lukewarm)', te: 'స్వచ్ఛమైన తేనె (గోరువెచ్చగా ఉన్నప్పుడు)' },
            quantity: { en: '1 teaspoon', te: '1 టీస్పూన్' },
            alternative: {
              name: { en: 'Organic Jaggery (Bellam)', te: 'తాటి లేదా చెరుకు బెల్లం' },
              quantity: { en: '1 teaspoon grated', te: '1 టీస్పూన్ తురుము' },
              note: {
                en: 'Jaggery can be boiled directly with the herbs and is safe for toddlers over 1 year.',
                te: 'బెల్లాన్ని ఆకులతో పాటే మరిగించవచ్చు; 1 ఏడాది పైబడిన పిల్లలకూ సురక్షితం.',
              },
            },
          },
        ],
        preparationSteps: [
          {
            en: 'Bring 1.5 cups (350 ml) of water to a gentle boil in a small saucepan.',
            te: 'ఒక చిన్న గిన్నెలో 1.5 కప్పుల (350 మి.లీ) నీటిని మరిగించండి.',
          },
          {
            en: 'Add crushed ginger, tulsi leaves, and crushed black pepper. Simmer on low flame for 6–7 minutes until reduced to 1 cup.',
            te: 'అందులో దంచిన అల్లం, తులసి ఆకులు, మిరియాలు వేసి సన్నని మంటపై 6–7 నిమిషాలు ఒక కప్పు అయ్యేవరకు మరిగించండి.',
          },
          {
            en: 'Strain into a mug and let it cool for 2 minutes until warm (never boiling hot), then stir in honey.',
            te: 'కప్పులోకి వడపోసి 2 నిమిషాలు ఆగి, గోరువెచ్చగా ఉన్నప్పుడు తేనె కలపండి.',
          },
        ],
        usageInstructions: {
          en: 'Sip slowly while warm, 1 cup in the morning and 1 cup in the evening for 2–3 days.',
          te: 'గోరువెచ్చగా ఉన్నప్పుడు ఉదయం ఒక కప్పు, సాయంత్రం ఒక కప్పు చొప్పున 2–3 రోజులు నెమ్మదిగా తాగండి.',
        },
        precautions: [
          {
            en: 'Never give honey to infants under 1 year of age (use plain warm water or jaggery for children over 1 year).',
            te: '1 సంవత్సరం లోపు పిల్లలకు ఎట్టి పరిస్థితుల్లోనూ తేనె ఇవ్వకండి.',
          },
          {
            en: 'Do not mix honey into boiling liquid; wait until it cools to sipping temperature.',
            te: 'మరుగుతున్న కషాయంలో తేనె కలపవద్దు; గోరువెచ్చగా అయిన తర్వాతే వేయండి.',
          },
          {
            en: 'If you have acid reflux or mouth ulcers, reduce black pepper to 1–2 grains.',
            te: 'ఎసిడిటీ లేదా నోటి పుండ్లు ఉంటే మిరియాలను 1–2 మాత్రమే వాడండి.',
          },
        ],
      },
      {
        id: 'cold_ajwain_steam',
        title: { en: 'Ajwain & Eucalyptus Steam Inhalation', te: 'వాము & నీలగిరి ఆవిరి పీల్చడం' },
        summary: {
          en: 'Moist aromatic steam helps open blocked nasal passages and relieve sinus pressure.',
          te: 'వేడి నీటి ఆవిరి ముక్కు దిబ్బడను వెంటనే వదిలించి శ్వాసను సులభతరం చేస్తుంది.',
        },
        prepTimeMinutes: 5,
        reliefType: { en: 'Steam Therapy', te: 'ఆవిరి చికిత్స' },
        matchedSymptomIds: ['blocked_nose', 'mild_chills', 'runny_nose'],
        ingredients: [
          {
            id: 'ajwain',
            name: { en: 'Ajwain (Carom seeds)', te: 'వాము గింజలు' },
            quantity: { en: '1 teaspoon', te: '1 టీస్పూన్' },
            alternative: {
              name: { en: 'Cumin seeds or Mint leaves', te: 'జీలకర్ర లేదా పుదీనా ఆకులు' },
              quantity: { en: '1 tbsp fresh mint or 1 tsp cumin', te: '1 టేబుల్‌స్పూన్ పుదీనా లేదా 1 టీస్పూన్ జీలకర్ర' },
              note: {
                en: 'Mint leaves release natural menthol in steam to clear congestion.',
                te: 'పుదీనా ఆకులు ఆవిరిలో సహజమైన మెంథాల్‌ను విడుదల చేసి ముక్కును తెరుస్తాయి.',
              },
            },
          },
          {
            id: 'eucalyptus',
            name: { en: 'Eucalyptus oil', te: 'యూకలిప్టస్ (నీలగిరి) నూనె' },
            quantity: { en: '2 drops (optional)', te: '2 చుక్కలు (ఐచ్ఛికం)' },
            alternative: {
              name: { en: 'A pinch of Turmeric or Camphor-free vapor balm', te: 'చిటికెడు పసుపు లేదా తులసి ఆకులు' },
              quantity: { en: '1/2 tsp turmeric powder', te: '1/2 టీస్పూన్ పసుపు' },
              note: {
                en: 'Plain steam with ajwain or turmeric works effectively even without essential oils.',
                te: 'నూనె లేకపోయినా వాము లేదా పసుపుతో కూడిన ఆవిరి బాగా పనిచేస్తుంది.',
              },
            },
          },
        ],
        preparationSteps: [
          {
            en: 'Boil 3 cups of water in a wide bowl and place it securely on a stable table.',
            te: 'ఒక వెడల్పాటి గిన్నెలో 3 కప్పుల నీరు మరిగించి, స్థిరంగా ఉన్న బల్లపై పెట్టండి.',
          },
          {
            en: 'Add crushed ajwain seeds (and 2 drops of eucalyptus oil if using).',
            te: 'దానిలో నలిపిన వాము గింజలు (మరియు వాడితే 2 చుక్కల నీలగిరి నూనె) వేయండి.',
          },
          {
            en: 'Sit comfortably, keep your face 10–12 inches above the bowl, drape a light towel over your head, and breathe slowly through your nose for 5–7 minutes.',
            te: 'గిన్నెకు కనీసం 10–12 అంగుళాల దూరంలో ముఖం ఉంచి, తలపై పల్చని టవల్ కప్పుకొని 5–7 నిమిషాలు నెమ్మదిగా ఆవిరి పీల్చండి.',
          },
        ],
        usageInstructions: {
          en: 'Inhale steam once in the morning and once before bedtime. Blow your nose gently afterward.',
          te: 'ఉదయం ఒకసారి, రాత్రి పడుకునే ముందు ఒకసారి ఆవిరి పట్టండి. ఆ తర్వాత మెల్లగా ముక్కు శుభ్రం చేసుకోండి.',
        },
        precautions: [
          {
            en: 'Keep eyes closed during steam inhalation and keep children at a safe distance to prevent burns from hot water spills.',
            te: 'ఆవిరి పట్టేటప్పుడు కళ్ళు మూసుకోండి; వేడి నీరు ఒలకకుండా పిల్లలను దూరంగా ఉంచండి.',
          },
          {
            en: 'If you have asthma triggered by strong aromas, skip eucalyptus oil and use plain warm steam.',
            te: 'ఆస్తమా ఉన్నవారు ఘాటైన నూనెలు వాడకుండా కేవలం సాధారణ నీటి ఆవిరి మాత్రమే పట్టండి.',
          },
        ],
      },
    ],
    medicalRedFlags: [
      {
        en: 'High fever above 102°F (38.9°C) or cold lasting longer than 10 days without improvement',
        te: '102°F (38.9°C) కంటే ఎక్కువ జ్వరం లేదా 10 రోజులైనా తగ్గని జలుబు',
      },
      {
        en: 'Shortness of breath, wheezing, chest pain, or earache',
        te: 'శ్వాస తీసుకోవడంలో ఇబ్బంది, గురక, ఛాతీ నొప్పి లేదా చెవి నొప్పి',
      },
      {
        en: 'Severe facial pain around eyes/forehead or symptoms in infants under 3 months',
        te: 'కళ్ళు లేదా నుదుటి చుట్టూ తీవ్రమైన నొప్పి, లేదా 3 నెలల లోపు శిశువులో లక్షణాలు',
      },
    ],
  },
  {
    id: 'cough',
    pillar: 'respiratory',
    name: { en: 'Cough (Dry or Mucus)', te: 'దగ్గు (పొడి లేదా కఫం దగ్గు)' },
    shortDesc: {
      en: 'Throat-coating honey blends and warm spiced milk to calm coughing fits.',
      te: 'పొడి దగ్గు మరియు కఫంతో కూడిన దగ్గును తగ్గించే తేనె, పసుపు చిట్కాలు.',
    },
    symptoms: [
      { id: 'dry_cough', label: { en: 'Dry, tickly cough', te: 'పొడి దగ్గు / గొంతులో గిలిగింత' } },
      { id: 'wet_cough', label: { en: 'Wet cough with mucus', te: 'కఫంతో కూడిన దగ్గు' } },
      { id: 'night_cough', label: { en: 'Nighttime coughing', te: 'రాత్రిపూట ఎక్కువయ్యే దగ్గు' } },
      { id: 'chest_tight', label: { en: 'Mild chest heaviness', te: 'ఛాతీలో తేలికపాటి బరువు' } },
    ],
    remedies: [
      {
        id: 'cough_ginger_honey',
        title: { en: 'Ginger Juice & Raw Honey Spoon', te: 'అల్లం రసం & తేనె మిశ్రమం' },
        summary: {
          en: 'Coats an irritated throat and calms cough reflexes naturally.',
          te: 'గొంతులోని గిలిగింతను తగ్గించి, దగ్గు నుండి తక్షణ ఉపశమనం ఇస్తుంది.',
        },
        prepTimeMinutes: 4,
        reliefType: { en: 'Soothing Spoonful', te: 'నోటితో తీసుకునే మిశ్రమం' },
        matchedSymptomIds: ['dry_cough', 'wet_cough', 'night_cough'],
        ingredients: [
          {
            id: 'ginger_juice',
            name: { en: 'Fresh Ginger Juice', te: 'తాజా అల్లం రసం' },
            quantity: { en: '1/2 teaspoon', te: '1/2 టీస్పూన్' },
            alternative: {
              name: { en: 'Dry Ginger Powder (Sonth) + Warm Water', te: 'సొంఠి పొడి + గోరువెచ్చని నీరు' },
              quantity: { en: '1/4 tsp powder mixed in 1 tsp warm water', te: '1/4 స్పూన్ పొడి + 1 స్పూన్ గోరువెచ్చని నీరు' },
              note: {
                en: 'Mix into a smooth paste before adding honey so it does not tickle the throat.',
                te: 'గొంతులో పొడిగా అంటుకోకుండా కొద్దిగా నీటితో పేస్ట్ లా కలిపి ఆపై తేనె వేయండి.',
              },
            },
          },
          {
            id: 'raw_honey',
            name: { en: 'Pure Honey', te: 'స్వచ్ఛమైన తేనె' },
            quantity: { en: '1 teaspoon', te: '1 టీస్పూన్' },
            alternative: {
              name: { en: 'Warm Jaggery Syrup or Licorice (Mulethi) Tea', te: 'బెల్లం పాకం లేదా అతిమధురం కషాయం' },
              quantity: { en: '1 tsp warm melted jaggery', te: '1 టీస్పూన్ గోరువెచ్చని బెల్లం పాకం' },
              note: {
                en: 'Warm jaggery with a pinch of turmeric helps soothe dry cough if honey is out.',
                te: 'తేనె లేనప్పుడు గోరువెచ్చని బెల్లం రసంలో చిటికెడు పసుపు కలిపి తీసుకోవచ్చు.',
              },
            },
          },
          {
            id: 'pepper_pinch',
            name: { en: 'Freshly ground Black Pepper', te: 'తాజాగా దంచిన మిరియాల పొడి' },
            quantity: { en: '1 small pinch', te: '1 చిటికెడు' },
            alternative: {
              name: { en: 'Turmeric Powder', te: 'పసుపు పొడి' },
              quantity: { en: '1 small pinch', te: '1 చిటికెడు' },
              note: {
                en: 'Turmeric is gentler on sensitive stomachs than black pepper.',
                te: 'కడుపులో మంట ఉన్నవారికి మిరియాలకు బదులు పసుపు సున్నితంగా ఉంటుంది.',
              },
            },
          },
        ],
        preparationSteps: [
          {
            en: 'Grate a small piece of washed ginger and squeeze the pulp cleanly through your fingers or a tea strainer to extract 1/2 tsp juice.',
            te: 'శుభ్రమైన అల్లాన్ని తురిమి, వడపోత లేదా చేతితో పిండి అర స్పూన్ రసం తీయండి.',
          },
          {
            en: 'Mix the ginger juice with 1 teaspoon of honey and a tiny pinch of black pepper in a clean spoon.',
            te: 'ఒక స్పూనులో అల్లం రసం, ఒక టీస్పూన్ తేనె మరియు చిటికెడు మిరియాల పొడి బాగా కలపండి.',
          },
        ],
        usageInstructions: {
          en: 'Swallow slowly and avoid drinking cold water for 20 minutes afterward so it coats the throat. Take 2 times a day.',
          te: 'నెమ్మదిగా చప్పరిస్తూ మింగండి. దీని తర్వాత 20 నిమిషాల వరకు చల్లని నీరు తాగకండి. రోజుకు 2 సార్లు తీసుకోండి.',
        },
        precautions: [
          {
            en: 'Do NOT give honey to babies under 12 months old.',
            te: '1 సంవత్సరం లోపు శిశువులకు తేనె అస్సలు ఇవ్వకండి.',
          },
          {
            en: 'People with diabetes should limit honey/jaggery and prefer warm turmeric water or steam instead.',
            te: 'మధుమేహం (షుగర్) ఉన్నవారు తేనె/బెల్లం బదులు గోరువెచ్చని పసుపు నీరు లేదా ఆవిరిని ఎంచుకోండి.',
          },
        ],
      },
      {
        id: 'cough_haldi_doodh',
        title: { en: 'Warm Turmeric & Pepper Milk (Haldi Doodh)', te: 'గోరువెచ్చని పసుపు పాలు' },
        summary: {
          en: 'Comforting bedtime drink that reduces throat irritation and helps restful sleep during cough.',
          te: 'రాత్రిపూట దగ్గును తగ్గించి ప్రశాంతమైన నిద్రకు తోడ్పడే గోరువెచ్చని పసుపు పాలు.',
        },
        prepTimeMinutes: 7,
        reliefType: { en: 'Bedtime Drink', te: 'రాత్రి తీసుకునే పానీయం' },
        matchedSymptomIds: ['dry_cough', 'night_cough', 'chest_tight'],
        ingredients: [
          {
            id: 'milk',
            name: { en: 'Milk', te: 'పాలు' },
            quantity: { en: '1 cup (240 ml)', te: '1 కప్పు (240 మి.లీ)' },
            alternative: {
              name: { en: 'Warm Oat/Almond Milk or Warm Water', te: 'బాదం పాలు లేదా గోరువెచ్చని నీరు' },
              quantity: { en: '1 cup (240 ml)', te: '1 కప్పు (240 మి.లీ)' },
              note: {
                en: 'If dairy increases mucus for you or if lactose intolerant, use almond milk or warm water.',
                te: 'పాలు కఫాన్ని పెంచుతున్నాయనిపిస్తే లేదా పడకపోతే బాదం పాలు లేదా గోరువెచ్చని నీరు వాడండి.',
              },
            },
          },
          {
            id: 'turmeric',
            name: { en: 'Turmeric Powder', te: 'స్వచ్ఛమైన పసుపు' },
            quantity: { en: '1/4 teaspoon', te: '1/4 టీస్పూన్' },
            alternative: {
              name: { en: 'Grated Fresh Raw Turmeric', te: 'పచ్చి పసుపు కొమ్ము తురుము' },
              quantity: { en: '1/2 teaspoon grated', te: '1/2 టీస్పూన్ తురుము' },
              note: {
                en: 'Fresh raw turmeric can be simmered in the milk and strained out.',
                te: 'పచ్చి పసుపును పాలలో మరిగించి వడపోయవచ్చు.',
              },
            },
          },
          {
            id: 'ghee_pepper',
            name: { en: 'Ghee + Pinch of Black Pepper', te: 'నెయ్యి + చిటికెడు మిరియాల పొడి' },
            quantity: { en: '1/2 tsp ghee + 1 pinch pepper', te: '1/2 స్పూన్ నెయ్యి + చిటికెడు మిరియాలు' },
            alternative: {
              name: { en: 'Cardamom (Elaichi) & Coconut Oil', te: 'యాలకుల పొడి & కొబ్బరి నూనె' },
              quantity: { en: '1 crushed cardamom pod + 1/2 tsp coconut oil', te: '1 దంచిన యాలక్కాయ + 1/2 స్పూన్ కొబ్బరి నూనె' },
              note: {
                en: 'A small amount of healthy fat helps absorb turmeric’s beneficial curcumin.',
                te: 'కొద్దిగా నెయ్యి లేదా కొబ్బరి నూనె పసుపులోని గుణాలను శరీరం గ్రహించడానికి సహాయపడుతుంది.',
              },
            },
          },
        ],
        preparationSteps: [
          {
            en: 'Pour 1 cup of milk into a small pot and add turmeric and black pepper.',
            te: 'ఒక గిన్నెలో 1 కప్పు పాలు పోసి పసుపు, మిరియాల పొడి వేయండి.',
          },
          {
            en: 'Bring to a gentle simmer over medium-low heat for 3–4 minutes while stirring.',
            te: 'సన్నని మంటపై కలుపుతూ 3–4 నిమిషాలు గోరువెచ్చగా మరిగించండి.',
          },
          {
            en: 'Pour into a mug, stir in 1/2 tsp ghee (and jaggery if desired), and sip warm.',
            te: 'కప్పులో పోసి అర స్పూన్ నెయ్యి (కావాలంటే కొద్దిగా బెల్లం) కలిపి గోరువెచ్చగా తాగండి.',
          },
        ],
        usageInstructions: {
          en: 'Drink 1 warm cup 30–45 minutes before sleeping.',
          te: 'రాత్రి నిద్రపోవడానికి 30–45 నిమిషాల ముందు ఒక కప్పు గోరువెచ్చగా తాగండి.',
        },
        precautions: [
          {
            en: 'Avoid if you feel dairy thickens your phlegm; switch to warm turmeric water or herbal kadha.',
            te: 'పాలు తాగడం వల్ల కఫం ఎక్కువవుతుందనిపిస్తే పాలకు బదులు పసుపు నీరు తాగండి.',
          },
          {
            en: 'Consult your doctor before frequent turmeric use if you have gallbladder stones or take blood-thinning medication.',
            te: 'పిత్తాశయ రాళ్లు ఉన్నవారు లేదా రక్తం పలుచబడే మందులు వాడేవారు వైద్య సలహా తీసుకోండి.',
          },
        ],
      },
    ],
    medicalRedFlags: [
      {
        en: 'Cough lasting more than 2–3 weeks, or coughing up blood or rust-colored sputum',
        te: '2–3 వారాలకు పైగా తగ్గని దగ్గు, లేదా దగ్గులో రక్తం/తుప్పు రంగు కఫం రావడం',
      },
      {
        en: 'Barking cough in children, wheezing, chest pain, or shortness of breath',
        te: 'పిల్లలలో వింత శబ్దంతో కూడిన దగ్గు, ఆయాసం, ఛాతీ నొప్పి లేదా శ్వాస అందకపోవడం',
      },
      {
        en: 'High fever accompanying a deep wet cough',
        te: 'కఫం దగ్గుతో పాటు అధిక జ్వరం ఉండటం',
      },
    ],
  },
  {
    id: 'fever',
    pillar: 'respiratory',
    name: { en: 'Mild Fever', te: 'తేలికపాటి జ్వరం' },
    shortDesc: {
      en: 'Gentle cooling hydration, tepid sponging, and coriander infusion to keep comfortable.',
      te: 'శరీర ఉష్ణోగ్రతను నియంత్రించి నీరసాన్ని తగ్గించే ధనియాల కషాయం మరియు తడిపట్టీ విధానం.',
    },
    symptoms: [
      { id: 'low_fever', label: { en: 'Warm forehead / low fever (<101°F)', te: 'తేలికపాటి జ్వరం (<101°F)' } },
      { id: 'body_fatigue', label: { en: 'Body ache & weakness', te: 'ఒళ్ళు నొప్పులు & నీరసం' } },
      { id: 'chills', label: { en: 'Mild shivering / chills', te: 'చలిగా అనిపించడం' } },
      { id: 'poor_appetite', label: { en: 'Loss of appetite', te: 'ఆకలి లేకపోవడం' } },
    ],
    remedies: [
      {
        id: 'fever_coriander_tea',
        title: { en: 'Coriander Seeds & Ginger Comfort Infusion', te: 'ధనియాలు & అల్లం కషాయం' },
        summary: {
          en: 'Traditional Dhaniya water gently supports hydration and soothes feverish restlessness.',
          te: 'శరీరానికి హైడ్రేషన్ అందిస్తూ జ్వరంలోని వేడిని, అలసటను శాంతపరిచే ధనియాల నీరు.',
        },
        prepTimeMinutes: 10,
        reliefType: { en: 'Hydrating Infusion', te: 'గోరువెచ్చని కషాయం' },
        matchedSymptomIds: ['low_fever', 'body_fatigue', 'chills', 'poor_appetite'],
        ingredients: [
          {
            id: 'coriander_seeds',
            name: { en: 'Whole Coriander Seeds (Dhaniya)', te: 'ధనియాలు' },
            quantity: { en: '1 tablespoon (lightly crushed)', te: '1 టేబుల్‌స్పూన్ (కచ్చాపచ్చాగా దంచినవి)' },
            alternative: {
              name: { en: 'Cumin Seeds (Jeera) or Fresh Coriander Stems', te: 'జీలకర్ర లేదా కొత్తిమీర కాడలు' },
              quantity: { en: '1 tsp cumin or 1/4 cup chopped stems', te: '1 స్పూన్ జీలకర్ర లేదా పావు కప్పు కొత్తిమీర కాడలు' },
              note: {
                en: 'Cumin water is equally light on an upset fever stomach.',
                te: 'ధనియాలు లేకపోతే జీలకర్ర నీరు కూడా జ్వరంలో కడుపుకు ఎంతో తేలికగా ఉంటుంది.',
              },
            },
          },
          {
            id: 'tulsi_fever',
            name: { en: 'Tulsi leaves', te: 'తులసి ఆకులు' },
            quantity: { en: '6 leaves', te: '6 ఆకులు' },
            alternative: {
              name: { en: 'Mint leaves or Cinnamon stick piece', te: 'పుదీనా ఆకులు లేదా చిన్న దాల్చినచెక్క' },
              quantity: { en: '6 mint leaves', te: '6 పుదీనా ఆకులు' },
              note: {
                en: 'Mint adds gentle cooling aroma without heavy spices.',
                te: 'తులసి బదులు పుదీనా సువాసనతో పాటు తేలికపాటి ఉపశమనం ఇస్తుంది.',
              },
            },
          },
          {
            id: 'ginger_fever',
            name: { en: 'Thin slices of Fresh Ginger', te: 'తాజా అల్లం ముక్కలు' },
            quantity: { en: '3 thin slices', te: '3 పల్చని ముక్కలు' },
            alternative: {
              name: { en: 'Cardamom Pod (crushed)', te: 'దంచిన యాలక్కాయ' },
              quantity: { en: '1 pod', te: '1 కాయ' },
              note: {
                en: 'Use cardamom if your throat or stomach feels irritated by ginger.',
                te: 'అల్లం లేకపోయినా లేదా మంటగా అనిపించినా యాలక్కాయ వాడవచ్చు.',
              },
            },
          },
        ],
        preparationSteps: [
          {
            en: 'Lightly crush 1 tablespoon of coriander seeds using a mortar or rolling pin.',
            te: 'ధనియాలను కచ్చాపచ్చాగా దంచండి.',
          },
          {
            en: 'Boil them with ginger slices and tulsi in 2 cups of water for 7–8 minutes until fragrant.',
            te: '2 కప్పుల నీటిలో ధనియాలు, అల్లం ముక్కలు, తులసి వేసి 7–8 నిమిషాలు మరిగించండి.',
          },
          {
            en: 'Strain into a cup and let it cool to comfortably warm or room temperature before sipping.',
            te: 'వడపోసి గోరువెచ్చగా లేదా సాధారణ ఉష్ణోగ్రతకు వచ్చిన తర్వాత తాగండి.',
          },
        ],
        usageInstructions: {
          en: 'Sip 1/2 cup every 2–3 hours alongside plenty of plain water and light foods like rice gruel (kanji).',
          te: 'ప్రతి 2–3 గంటలకు అర కప్పు చొప్పున తాగండి. దానితో పాటు సరిపడా నీరు, పల్చటి గంజి వంటి తేలికపాటి ఆహారం తీసుకోండి.',
        },
        precautions: [
          {
            en: 'Monitor temperature regularly with a thermometer; home drinks only support comfort and hydration.',
            te: 'థర్మామీటర్‌తో జ్వరాన్ని క్రమం తప్పకుండా కొలవండి; ఇవి శరీరానికి ఉపశమనం కోసమే.',
          },
          {
            en: 'Never force hot drinks if shivering intensely—keep fluids comfortably warm.',
            te: 'చలిగా వణుకుతున్నప్పుడు మరీ వేడిగా ఉన్న పానీయాలు తాగవద్దు, గోరువెచ్చగా మాత్రమే తీసుకోండి.',
          },
        ],
      },
      {
        id: 'fever_tepid_sponge',
        title: { en: 'Lukewarm Water Sponge & Forehead Compress', te: 'గోరువెచ్చని నీటి తడిపట్టీ (Tepid Sponging)' },
        summary: {
          en: 'Safely helps body heat dissipate through evaporation without causing shivering.',
          te: 'వణుకు రాకుండా శరీరంలోని అధిక వేడిని సురక్షితంగా తగ్గించే పద్ధతి.',
        },
        prepTimeMinutes: 3,
        reliefType: { en: 'External Cooling Care', te: 'బాహ్య ఉపశమనం' },
        matchedSymptomIds: ['low_fever', 'body_fatigue'],
        ingredients: [
          {
            id: 'lukewarm_water',
            name: { en: 'Lukewarm (Tap-Warm) Water', te: 'గోరువెచ్చని నీరు' },
            quantity: { en: '1 wide bowl', te: '1 వెడల్పాటి గిన్నె' },
            alternative: {
              name: { en: 'Room-temperature clean water', te: 'సాధారణ గది ఉష్ణోగ్రత నీరు' },
              quantity: { en: '1 wide bowl', te: '1 వెడల్పాటి గిన్నె' },
              note: {
                en: 'Never use ice-cold water or alcohol, as cold water causes shivering and raises core temperature.',
                te: 'మంచు నీరు లేదా చల్లని నీరు ఎప్పుడూ వాడకండి; దానివల్ల వణుకు వచ్చి జ్వరం మరింత పెరుగుతుంది.',
              },
            },
          },
          {
            id: 'cotton_cloth',
            name: { en: 'Soft Clean Cotton Cloths', te: 'శుభ్రమైన మెత్తని కాటన్ వస్త్రం' },
            quantity: { en: '2 small towels', te: '2 చిన్న టవల్స్' },
            alternative: {
              name: { en: 'Soft cotton handkerchief', te: 'మెత్తని కాటన్ కర్చీఫ్' },
              quantity: { en: '2 clean cloths', te: '2 శుభ్రమైనవి' },
              note: {
                en: 'Use breathable cotton rather than thick synthetic towels.',
                te: 'గాలి తగిలేలా పల్చని కాటన్ వస్త్రాన్ని వాడండి.',
              },
            },
          },
        ],
        preparationSteps: [
          {
            en: 'Dip a soft cotton cloth in lukewarm water (comfortably warm to your wrist) and wring out excess drips.',
            te: 'మెత్తని కాటన్ వస్త్రాన్ని గోరువెచ్చని నీటిలో ముంచి, నీరు కారకుండా పిండండి.',
          },
          {
            en: 'Place gently across the forehead, or wipe arms, legs, and underarms lightly for 10 minutes.',
            te: 'నుదుటిపై వేయండి లేదా చేతులు, కాళ్ళు మరియు చంకల భాగంలో 10 నిమిషాలు మెల్లగా తుడవండి.',
          },
          {
            en: 'Dress in a single light breathable cotton layer and rest in an airy room without strong cold drafts.',
            te: 'పల్చని కాటన్ దుస్తులు వేసుకుని గాలి ఆడే గదిలో విశ్రాంతి తీసుకోండి.',
          },
        ],
        usageInstructions: {
          en: 'Repeat for 10–15 minutes whenever fever feels uncomfortable. Stop immediately if shivering begins.',
          te: 'వేడి ఎక్కువగా అనిపించినప్పుడు 10–15 నిమిషాలు చేయండి. వణుకు మొదలైతే వెంటనే ఆపివేయండి.',
        },
        precautions: [
          {
            en: 'NEVER use ice water, cold baths, or rubbing alcohol on skin.',
            te: 'ఐస్ నీరు, చల్లని స్నానం లేదా స్పిరిట్ ఎట్టి పరిస్థితుల్లోనూ వాడకండి.',
          },
          {
            en: 'Do not bundle up under heavy blankets if trying to bring a temperature down.',
            te: 'జ్వరం తగ్గాలంటే మందపాటి దుప్పట్లు కప్పుకోకండి.',
          },
        ],
      },
    ],
    medicalRedFlags: [
      {
        en: 'Fever above 102°F (38.9°C), or any fever in an infant under 3 months old',
        te: '102°F (38.9°C) కంటే ఎక్కువ జ్వరం, లేదా 3 నెలల లోపు శిశువుకు ఏ స్థాయిలోనైనా జ్వరం',
      },
      {
        en: 'Fever lasting more than 3 days, skin rash, stiff neck, confusion, or severe headache',
        te: '3 రోజులకు పైగా జ్వరం, శరీరంపై దద్దుర్లు, మెడ బిగుసుకుపోవడం లేదా తీవ్రమైన తలనొప్పి',
      },
      {
        en: 'Inability to keep fluids down, very little urination, or seizures',
        te: 'నీరు కూడా తాగలేకపోవడం, మూత్రం తగ్గిపోవడం లేదా ఫిట్స్ రావడం',
      },
    ],
  },
  {
    id: 'throat_pain',
    pillar: 'respiratory',
    name: { en: 'Throat Pain & Soreness', te: 'గొంతు నొప్పి & గరగర' },
    shortDesc: {
      en: 'Warm saltwater gargles and anti-inflammatory herbal sips to soothe rawness.',
      te: 'గొంతు వాపు, నొప్పి మరియు గరగరను తగ్గించే ఉప్పు నీటి పుక్కిలింతలు & కషాయాలు.',
    },
    symptoms: [
      { id: 'swallow_pain', label: { en: 'Pain when swallowing', te: 'మింగేటప్పుడు నొప్పి' } },
      { id: 'scratchy_throat', label: { en: 'Dry, scratchy throat', te: 'గొంతులో గరగర & పొడిబారడం' } },
      { id: 'hoarse_voice', label: { en: 'Hoarse or strained voice', te: 'గొంతు బొంగురుపోవడం' } },
    ],
    remedies: [
      {
        id: 'throat_salt_turmeric_gargle',
        title: { en: 'Warm Salt & Turmeric Water Gargle', te: 'గోరువెచ్చని ఉప్పు & పసుపు నీటి పుక్కిలింత' },
        summary: {
          en: 'Draws out mild tissue swelling and washes away irritants from the throat lining.',
          te: 'గొంతులోని వాపును, ఇన్ఫెక్షన్ కారకాలను తగ్గించే అత్యంత సురక్షితమైన విధానం.',
        },
        prepTimeMinutes: 3,
        reliefType: { en: 'Throat Gargle', te: 'పుక్కిలింత విధానం' },
        matchedSymptomIds: ['swallow_pain', 'scratchy_throat', 'hoarse_voice'],
        ingredients: [
          {
            id: 'warm_water',
            name: { en: 'Warm Drinking Water', te: 'గోరువెచ్చని తాగునీరు' },
            quantity: { en: '1 full glass (250 ml)', te: '1 గ్లాసు (250 మి.లీ)' },
            alternative: {
              name: { en: 'Weak Warm Chamomile or Mint Water', te: 'చమోమైల్ లేదా పుదీనా నీరు' },
              quantity: { en: '1 full glass', te: '1 గ్లాసు' },
              note: {
                en: 'Plain boiled-and-cooled warm water is ideal; do not add anything hot.',
                te: 'మరిగించి గోరువెచ్చగా చేసిన సాధారణ నీరు ఉత్తమం.',
              },
            },
          },
          {
            id: 'salt',
            name: { en: 'Table Salt or Rock Salt (Sendha Namak)', te: 'ఉప్పు లేదా సైంధవ లవణం' },
            quantity: { en: '1/2 teaspoon', te: '1/2 టీస్పూన్' },
            alternative: {
              name: { en: 'Baking Soda (for gentle non-sting rinse)', te: 'వంట సోడా (బేకింగ్ సోడా)' },
              quantity: { en: '1/4 teaspoon', te: '1/4 టీస్పూన్' },
              note: {
                en: 'Baking soda works well if your throat is very raw and salt stings.',
                te: 'గొంతు మంటగా ఉండి ఉప్పు పడకపోతే చిటికెడు వంట సోడా వాడవచ్చు.',
              },
            },
          },
          {
            id: 'turmeric_gargle',
            name: { en: 'Turmeric Powder', te: 'పసుపు' },
            quantity: { en: '1/4 teaspoon', te: '1/4 టీస్పూన్' },
            alternative: {
              name: { en: 'Skip turmeric (Saltwater alone works well)', te: 'పసుపు లేకపోతే కేవలం ఉప్పు నీరు' },
              quantity: { en: 'Omit safely', te: 'ఉప్పు నీటితోనే పుక్కిలించండి' },
              note: {
                en: 'Saltwater alone provides the core osmotic swelling relief.',
                te: 'పసుపు లేకపోయినా ఉప్పు నీరు గొంతు వాపును చక్కగా తగ్గిస్తుంది.',
              },
            },
          },
        ],
        preparationSteps: [
          {
            en: 'Warm 1 glass of water until comfortable to sip (never hot enough to burn).',
            te: 'ఒక గ్లాసు నీటిని గోరువెచ్చగా చేయండి (కాల్చేంత వేడి వద్దు).',
          },
          {
            en: 'Dissolve 1/2 teaspoon salt and 1/4 teaspoon turmeric completely.',
            te: 'దానిలో అర స్పూన్ ఉప్పు మరియు పావు స్పూన్ పసుపు పూర్తిగా కరిగించండి.',
          },
          {
            en: 'Take a mouthful, tilt head slightly back, gargle gently for 20–30 seconds, and spit it out completely.',
            te: 'నోటి నిండా నీరు తీసుకొని, తల కొద్దిగా వెనుకకు వంచి 20–30 సెకన్లు గొంతులో పుక్కిలించి ఉమ్మేయండి.',
          },
        ],
        usageInstructions: {
          en: 'Gargle 3–4 times a day, especially in the morning and before sleep. Do not swallow the gargle water.',
          te: 'రోజుకు 3–4 సార్లు, ముఖ్యంగా ఉదయం మరియు రాత్రి పడుకునే ముందు పుక్కిలించండి. ఈ నీటిని మింగకండి.',
        },
        precautions: [
          {
            en: 'Only suitable for adults and children old enough to gargle and spit reliably (usually age 6+).',
            te: 'మింగకుండా ఉమ్మగలిగే 6 ఏళ్లు పైబడిన పిల్లలు మరియు పెద్దలకు మాత్రమే ఇది సురక్షితం.',
          },
          {
            en: 'Spit out all water completely if you have high blood pressure or sodium restrictions.',
            te: 'అధిక రక్తపోటు (బీపీ) ఉన్నవారు ఈ నీటిని అస్సలు మింగకుండా పూర్తిగా ఉమ్మేయాలి.',
          },
        ],
      },
      {
        id: 'throat_methi_infusion',
        title: { en: 'Fenugreek (Methi) Seed Soothing Gargle & Tea', te: 'మెంతుల కషాయం (తాగడానికి & పుక్కిలించడానికి)' },
        summary: {
          en: 'Fenugreek releases natural mucilage that coats and calms dry, hoarse vocal cords.',
          te: 'మెంతుల్లో ఉండే జిగురు స్వభావం గొంతు పొడిబారడాన్ని మరియు స్వరపేటిక బొంగురుపోవడాన్ని తగ్గిస్తుంది.',
        },
        prepTimeMinutes: 10,
        reliefType: { en: 'Mucilage Soother', te: 'గొంతుకు మృదువైన కషాయం' },
        matchedSymptomIds: ['scratchy_throat', 'hoarse_voice', 'swallow_pain'],
        ingredients: [
          {
            id: 'methi',
            name: { en: 'Fenugreek Seeds (Methi / Menthulu)', te: 'మెంతులు' },
            quantity: { en: '1 teaspoon', te: '1 టీస్పూన్' },
            alternative: {
              name: { en: 'Cinnamon stick + Honey in warm water', te: 'దాల్చినచెక్క + తేనె' },
              quantity: { en: '1-inch cinnamon stick', te: '1 అంగుళం దాల్చినచెక్క' },
              note: {
                en: 'Cinnamon infusion soothes sore throat soreness if you have no fenugreek.',
                te: 'మెంతులు లేకపోతే దాల్చినచెక్క నీరు గొంతు నొప్పికి మంచి ప్రత్యామ్నాయం.',
              },
            },
          },
        ],
        preparationSteps: [
          {
            en: 'Simmer 1 teaspoon of fenugreek seeds in 1.5 cups of water for 7–8 minutes.',
            te: '1.5 కప్పుల నీటిలో 1 టీస్పూన్ మెంతులు వేసి 7–8 నిమిషాలు మరిగించండి.',
          },
          {
            en: 'Strain out the seeds and allow the golden liquid to cool to lukewarm.',
            te: 'గింజలను వడకట్టి, కషాయం గోరువెచ్చగా అయ్యేవరకు ఆగండి.',
          },
        ],
        usageInstructions: {
          en: 'Gargle half the cup slowly and sip the remaining half warm, 1–2 times daily.',
          te: 'సగం కప్పుతో నెమ్మదిగా పుక్కిలించి, మిగిలిన సగం కప్పును గోరువెచ్చగా తాగండి (రోజుకు 1–2 సార్లు).',
        },
        precautions: [
          {
            en: 'Avoid large quantities of fenugreek tea during pregnancy or if taking blood-sugar lowering medications without medical guidance.',
            te: 'గర్భిణీలు మరియు షుగర్ మందులు వాడేవారు మెంతుల కషాయాన్ని ఎక్కువగా తాగే ముందు వైద్యుడిని సంప్రదించండి.',
          },
        ],
      },
    ],
    medicalRedFlags: [
      {
        en: 'Difficulty breathing, drooling, or inability to swallow water',
        te: 'శ్వాస తీసుకోవడంలో ఇబ్బంది, లేదా నీరు కూడా మింగలేని పరిస్థితి',
      },
      {
        en: 'White/yellow pus patches on tonsils with high fever or swollen neck glands',
        te: 'టాన్సిల్స్‌పై తెల్లని మచ్చలతో పాటు అధిక జ్వరం లేదా మెడ వాపు',
      },
      {
        en: 'Hoarseness or sore throat lasting longer than 5–7 days',
        te: '5–7 రోజులైనా తగ్గని గొంతు నొప్పి లేదా గొంతు బొంగురు',
      },
    ],
  },
  {
    id: 'knee_pain',
    pillar: 'pain_skin',
    name: { en: 'Knee & Joint Pain', te: 'మోకాళ్ల & కీళ్ల నొప్పి' },
    shortDesc: {
      en: 'Warm oil massages, turmeric compresses, and heat care for everyday joint stiffness.',
      te: 'కీళ్ల బిగుతు మరియు మోకాళ్ల నొప్పికి వెచ్చని నూనె మర్దన, పసుపు లేపనం & కాపడం.',
    },
    symptoms: [
      { id: 'morning_stiffness', label: { en: 'Stiffness on waking up', te: 'నిద్రలేవగానే బిగుతుగా ఉండటం' } },
      { id: 'walk_ache', label: { en: 'Dull ache after walking', te: 'నడిచిన తర్వాత నొప్పి' } },
      { id: 'mild_swelling', label: { en: 'Mild puffiness / soreness', te: 'తేలికపాటి వాపు లేదా మంట' } },
    ],
    remedies: [
      {
        id: 'knee_sesame_garlic_oil',
        title: { en: 'Warm Sesame & Garlic Infused Oil Massage', te: 'గోరువెచ్చని నువ్వుల నూనె & వెల్లుల్లి మర్దన' },
        summary: {
          en: 'Gentle warmth and circular massage improve local circulation and ease morning stiffness.',
          te: 'రక్త ప్రసరణను మెరుగుపరిచి మోకాళ్ల బిగుతు మరియు నొప్పిని తగ్గిస్తుంది.',
        },
        prepTimeMinutes: 8,
        reliefType: { en: 'Topical Warm Massage', te: 'బాహ్య నూనె మర్దన' },
        matchedSymptomIds: ['morning_stiffness', 'walk_ache'],
        ingredients: [
          {
            id: 'sesame_oil',
            name: { en: 'Cold-Pressed Sesame Oil (Nuvvula Nune)', te: 'నువ్వుల నూనె' },
            quantity: { en: '2 tablespoons', te: '2 టేబుల్‌స్పూన్లు' },
            alternative: {
              name: { en: 'Mustard Oil or Warm Coconut Oil', te: 'ఆవ నూనె లేదా కొబ్బరి నూనె' },
              quantity: { en: '2 tablespoons', te: '2 టేబుల్‌స్పూన్లు' },
              note: {
                en: 'Mustard oil provides warming comfort; coconut oil is best for sensitive skin.',
                te: 'ఆవ నూనె మంచి వెచ్చదనాన్ని ఇస్తుంది; సున్నితమైన చర్మానికి కొబ్బరి నూనె మంచిది.',
              },
            },
          },
          {
            id: 'garlic_cloves',
            name: { en: 'Crushed Garlic Cloves + Ajwain', te: 'దంచిన వెల్లుల్లి రెబ్బలు + వాము' },
            quantity: { en: '2 cloves + 1/2 tsp ajwain', te: '2 రెబ్బలు + 1/2 స్పూన్ వాము' },
            alternative: {
              name: { en: 'Crushed Ginger or Turmeric Pinch', te: 'దంచిన అల్లం లేదా చిటికెడు పసుపు' },
              quantity: { en: '1/2 tsp crushed ginger', te: '1/2 స్పూన్ దంచిన అల్లం' },
              note: {
                en: 'Ginger infuses mild warming relief into oil without strong garlic scent.',
                te: 'వెల్లుల్లి వాసన నచ్చకపోతే అల్లం లేదా పసుపు వేసి వేడి చేయవచ్చు.',
              },
            },
          },
        ],
        preparationSteps: [
          {
            en: 'Warm the sesame oil on very low heat with crushed garlic and ajwain for 2–3 minutes until lightly golden (do not smoke or burn).',
            te: 'సన్నని మంటపై నువ్వుల నూనెలో దంచిన వెల్లుల్లి, వాము వేసి 2–3 నిమిషాలు గోరువెచ్చగా కాగనివ్వండి (మాడనివ్వకండి).',
          },
          {
            en: 'Strain out the solids and test the oil temperature on your inner wrist so it is comfortably warm, never hot.',
            te: 'నూనెను వడపోసి, చేతి మణికట్టుపై పరీక్షించి గోరువెచ్చగా ఉన్నట్లు నిర్ధారించుకోండి.',
          },
          {
            en: 'Massage around the knee joint gently in slow circular motions for 5–7 minutes without pressing hard directly on the kneecap.',
            te: 'మోచిప్పపై గట్టిగా నొక్కకుండా మోకాలి చుట్టూ గుండ్రంగా 5–7 నిమిషాలు మెల్లగా మర్దన చేయండి.',
          },
        ],
        usageInstructions: {
          en: 'Apply once daily before a warm bath or before sleep. Wrap loosely in a soft cotton cloth for 15 minutes for warmth.',
          te: 'రోజుకు ఒకసారి స్నానానికి ముందు లేదా రాత్రి పడుకునే ముందు రాసి, పల్చని కాటన్ వస్త్రంతో కప్పండి.',
        },
        precautions: [
          {
            en: 'Do NOT apply warm oil or heat if the knee is visibly hot, red, acutely swollen from a recent fall/injury, or has broken skin.',
            te: 'మోకాలు ఎర్రగా ఉండి వేడిగా ఉన్నా, దెబ్బ తగిలి వాచినా వేడి నూనె లేదా కాపడం అస్సలు పెట్టకండి (అప్పుడు ఐస్ ప్యాక్ వాడాలి).',
          },
          {
            en: 'Do a small skin patch test if using mustard oil or garlic for the first time.',
            te: 'ఆవ నూనె లేదా వెల్లుల్లి నూనె మొదటిసారి వాడుతుంటే ముందుగా చేతిపై కొద్దిగా రాసి పరీక్షించండి.',
          },
        ],
      },
      {
        id: 'knee_turmeric_compress',
        title: { en: 'Warm Saltwater Compress & Turmeric Paste (Lep)', te: 'గోరువెచ్చని ఉప్పు నీటి కాపడం & పసుపు లేపనం' },
        summary: {
          en: 'Soothes mild joint soreness and morning stiffness gently without aggressive rubbing.',
          te: 'గట్టిగా మర్దన చేయకుండానే కీళ్ల నొప్పి మరియు తేలికపాటి వాపుకు ఉపశమనం ఇస్తుంది.',
        },
        prepTimeMinutes: 6,
        reliefType: { en: 'Soothing Compress', te: 'వెచ్చని కాపడం' },
        matchedSymptomIds: ['mild_swelling', 'morning_stiffness', 'walk_ache'],
        ingredients: [
          {
            id: 'epsom_salt',
            name: { en: 'Epsom Salt or Rock Salt', te: 'ఎప్సమ్ సాల్ట్ లేదా రాళ్ళ ఉప్పు' },
            quantity: { en: '2 tablespoons in warm water', te: '2 టేబుల్‌స్పూన్లు (గోరువెచ్చని నీటిలో)' },
            alternative: {
              name: { en: 'Plain Warm Water + Heating Pad / Hot Water Bag', te: 'వెచ్చని నీటి సంచి (Hot Water Bag)' },
              quantity: { en: '10 minutes warm compress', te: '10 నిమిషాలు కాపడం' },
              note: {
                en: 'A clean towel dipped in warm saltwater works well if you do not have Epsom salt.',
                te: 'ఎప్సమ్ సాల్ట్ లేకపోతే సాధారణ రాళ్ళ ఉప్పు కలిపిన గోరువెచ్చని నీటితో కాపడం పెట్టవచ్చు.',
              },
            },
          },
          {
            id: 'turmeric_paste',
            name: { en: 'Turmeric Powder + Aloe or Warm Water', te: 'పసుపు + కలబంద గుజ్జు లేదా నీరు' },
            quantity: { en: '1 tsp turmeric mixed into smooth paste', te: '1 టీస్పూన్ పసుపు పేస్ట్' },
            alternative: {
              name: { en: 'Turmeric + Pinch of Alum or Gram Flour', te: 'పసుపు + శనగపిండి' },
              quantity: { en: '1 tsp turmeric + 1/2 tsp gram flour', te: '1 స్పూన్ పసుపు + 1/2 స్పూన్ శనగపిండి' },
              note: {
                en: 'Adding a little flour keeps the paste from dripping onto clothes.',
                te: 'కొద్దిగా శనగపిండి కలపడం వల్ల లేపనం బట్టలకు అంటకుండా గట్టిగా ఉంటుంది.',
              },
            },
          },
        ],
        preparationSteps: [
          {
            en: 'Dissolve 2 tbsp salt in a bowl of comfortably warm water. Soak a folded towel, wring it out, and hold over the sore knee for 10 minutes.',
            te: 'గోరువెచ్చని నీటిలో ఉప్పు కరిగించి, టవల్‌ను ముంచి పిండి మోకాలిపై 10 నిమిషాలు కాపడం పెట్టండి.',
          },
          {
            en: 'Pat dry and apply a thin layer of smooth turmeric-water paste around the joint for 15–20 minutes, then wash off with lukewarm water.',
            te: 'తడి తుడిచి పసుపు లేపనాన్ని పల్చగా రాసి 15–20 నిమిషాల తర్వాత గోరువెచ్చని నీటితో కడిగేయండి.',
          },
        ],
        usageInstructions: {
          en: 'Use once daily in the evening. Avoid sitting cross-legged on hard floors while knee is sore.',
          te: 'రోజుకు ఒకసారి సాయంత్రం చేయండి. నొప్పి ఉన్నప్పుడు నేలపై పద్మాసనం వేసి కూర్చోవడం తగ్గించండి.',
        },
        precautions: [
          {
            en: 'For a fresh sprain or swollen hot knee (within first 48 hours), use a wrapped cold ice pack instead of heat.',
            te: 'కొత్తగా బెణికిన లేదా వాచి వేడిగా ఉన్న మోకాలికి మొదటి 48 గంటలు వేడి కాపడం కాకుండా ఐస్ ప్యాక్ వాడాలి.',
          },
          {
            en: 'Turmeric stains light clothing—use an old dark towel underneath.',
            te: 'పసుపు మరకలు పడతాయి కాబట్టి పాత టవల్ కింద వేసుకోండి.',
          },
        ],
      },
    ],
    medicalRedFlags: [
      {
        en: 'Inability to bear weight on the leg, knee locking, or sudden buckling',
        te: 'కాలుపై బరువు మోపలేకపోవడం, మోకాలు లాక్ అవ్వడం లేదా పట్టేయడం',
      },
      {
        en: 'Hot, bright red, severely swollen knee accompanied by fever',
        te: 'మోకాలు ఎర్రగా ఉండి విపరీతంగా వాచి, జ్వరం కూడా రావడం',
      },
      {
        en: 'Pain following a major fall, twist, or accident',
        te: 'కింద పడటం లేదా ప్రమాదం తర్వాత వచ్చిన తీవ్రమైన నొప్పి',
      },
    ],
  },
  {
    id: 'indigestion',
    pillar: 'digestive',
    name: { en: 'Indigestion, Gas & Acidity', te: 'అజీర్ణం, గ్యాస్ & ఎసిడిటీ' },
    shortDesc: {
      en: 'Quick digestive spices like ajwain, cumin, and cooling buttermilk to settle the stomach.',
      te: 'కడుపు ఉబ్బరం, గ్యాస్ మరియు ఛాతీలో మంటను తగ్గించే వాము, జీలకర్ర, మజ్జిగ చిట్కాలు.',
    },
    symptoms: [
      { id: 'bloating_gas', label: { en: 'Bloating / trapped gas', te: 'కడుపు ఉబ్బరం / గ్యాస్' } },
      { id: 'acidity_burn', label: { en: 'Sour burps / heartburn', te: 'పుల్లటి తేనుపులు / ఛాతీలో మంట' } },
      { id: 'heavy_stomach', label: { en: 'Heavy stomach after eating', te: 'తిన్న తర్వాత కడుపు బరువుగా ఉండటం' } },
      { id: 'mild_nausea', label: { en: 'Mild nausea', te: 'తేలికపాటి వికారం' } },
    ],
    remedies: [
      {
        id: 'indigestion_ajwain_water',
        title: { en: 'Roasted Ajwain & Black Salt with Warm Water', te: 'వేయించిన వాము & నల్ల ఉప్పుతో గోరువెచ్చని నీరు' },
        summary: {
          en: 'Fast-acting traditional digestive for heaviness, trapped gas, and post-meal bloating.',
          te: 'తిన్న తర్వాత కడుపు బరువు మరియు గ్యాస్ సమస్యకు వేగంగా పనిచేసే చిట్కా.',
        },
        prepTimeMinutes: 3,
        reliefType: { en: 'Quick Digestive', te: 'త్వరిత ఉపశమనం' },
        matchedSymptomIds: ['bloating_gas', 'heavy_stomach'],
        ingredients: [
          {
            id: 'ajwain_dig',
            name: { en: 'Ajwain (Carom seeds)', te: 'వాము' },
            quantity: { en: '1/2 teaspoon', te: '1/2 టీస్పూన్' },
            alternative: {
              name: { en: 'Fennel Seeds (Saunf) or Cumin Seeds (Jeera)', te: 'సోంపు లేదా జీలకర్ర' },
              quantity: { en: '1 teaspoon lightly chewed', te: '1 టీస్పూన్ నమిలి తినండి' },
              note: {
                en: 'Fennel is milder and preferred if you also have acid reflux/heartburn.',
                te: 'ఎసిడిటీ/మంట కూడా ఉంటే వాము కంటే సోంపు చల్లని ఉపశమనాన్ని ఇస్తుంది.',
              },
            },
          },
          {
            id: 'black_salt',
            name: { en: 'Black Salt (Kala Namak)', te: 'నల్ల ఉప్పు' },
            quantity: { en: '1 small pinch', te: '1 చిటికెడు' },
            alternative: {
              name: { en: 'Pinch of Rock Salt or Plain Warm Water', te: 'చిటికెడు సైంధవ లవణం లేదా సాధారణ నీరు' },
              quantity: { en: '1 small pinch (omit if hypertensive)', te: '1 చిటికెడు (బీపీ ఉంటే ఉప్పు వద్దు)' },
              note: {
                en: 'You can skip salt completely and simply chew roasted ajwain/fennel with warm water.',
                te: 'బీపీ ఉన్నవారు ఉప్పు లేకుండా కేవలం వాము/సోంపును గోరువెచ్చని నీటితో తీసుకోవచ్చు.',
              },
            },
          },
        ],
        preparationSteps: [
          {
            en: 'Dry roast 1/2 teaspoon of ajwain on a warm pan for 30 seconds until aromatic (optional—raw works too).',
            te: 'వామును పెనంపై 30 సెకన్లు సువాసన వచ్చేవరకు దోరగా వేయించండి (లేదా పచ్చిదైనా పర్వాలేదు).',
          },
          {
            en: 'Chew the ajwain with a tiny pinch of black salt and wash down with 1 glass of warm water.',
            te: 'దానిలో చిటికెడు నల్ల ఉప్పు కలిపి బాగా నమిలి, ఒక గ్లాసు గోరువెచ్చని నీరు తాగండి.',
          },
        ],
        usageInstructions: {
          en: 'Take once after a heavy meal or when bloating starts. Walk gently indoors for 5–10 minutes.',
          te: 'భోజనం తర్వాత కడుపు బరువుగా అనిపించినప్పుడు ఒకసారి తీసుకోండి. తర్వాత 5–10 నిమిషాలు నెమ్మదిగా నడవండి.',
        },
        precautions: [
          {
            en: 'Skip ajwain if you have active stomach ulcers or burning heartburn—choose Cold Buttermilk or Fennel Tea instead.',
            te: 'కడుపులో అల్సర్లు లేదా తీవ్రమైన ఛాతీ మంట ఉన్నవారు వాము బదులు చల్లని మజ్జిగ లేదా సోంపు నీరు తాగండి.',
          },
          {
            en: 'Omit black salt if you are on a low-sodium diet for high blood pressure.',
            te: 'బీపీ సమస్య ఉన్నవారు నల్ల ఉప్పు వాడకండి.',
          },
        ],
      },
      {
        id: 'indigestion_buttermilk',
        title: { en: 'Cooling Buttermilk (Chaas) with Roasted Cumin & Mint', te: 'వేయించిన జీలకర్ర & పుదీనాతో మజ్జిగ' },
        summary: {
          en: 'Naturally cools sour acidity and provides gentle gut-friendly probiotics.',
          te: 'కడుపులోని ఆమ్లతను (ఎసిడిటీ) మరియు మంటను వెంటనే చల్లబరిచే మజ్జిగ.',
        },
        prepTimeMinutes: 4,
        reliefType: { en: 'Cooling Soother', te: 'కడుపు చల్లబరిచే పానీయం' },
        matchedSymptomIds: ['acidity_burn', 'heavy_stomach', 'bloating_gas'],
        ingredients: [
          {
            id: 'curd',
            name: { en: 'Fresh Plain Yogurt (not overly sour)', te: 'తాజా పెరుగు (పుల్లగా లేనిది)' },
            quantity: { en: '3 tablespoons whisked in 1 cup cool water', te: '3 టేబుల్‌స్పూన్లు (1 కప్పు నీటిలో చిలికినది)' },
            alternative: {
              name: { en: 'Cold Milk (unflavored) or Soaked Fennel Water', te: 'చల్లని పాలు లేదా నానబెట్టిన సోంపు నీరు' },
              quantity: { en: '1/2 cup cold milk or 1 cup fennel water', te: 'అర కప్పు పాలు లేదా కప్పు సోంపు నీరు' },
              note: {
                en: 'If dairy-free, steep 1 tsp fennel seeds in cool water for 15 minutes and sip.',
                te: 'పెరుగు లేకపోతే లేదా పడకపోతే సోంపు నానబెట్టిన నీరు తాగండి.',
              },
            },
          },
          {
            id: 'cumin_mint',
            name: { en: 'Roasted Cumin Powder + Crushed Mint', te: 'వేయించిన జీలకర్ర పొడి + పుదీనా ఆకులు' },
            quantity: { en: '1/4 tsp cumin + 4 crushed mint leaves', te: '1/4 స్పూన్ జీలకర్ర + 4 పుదీనా ఆకులు' },
            alternative: {
              name: { en: 'Coriander leaves + Pinch of Asafoetida (Hing)', te: 'కొత్తిమీర + చిటికెడు ఇంగువ' },
              quantity: { en: '1 tbsp chopped coriander', te: '1 టేబుల్‌స్పూన్ కొత్తిమీర' },
              note: {
                en: 'Coriander leaves also soothe acidity without heating spices.',
                te: 'కొత్తిమీర కడుపులోని వేడిని తగ్గించడానికి సహాయపడుతుంది.',
              },
            },
          },
        ],
        preparationSteps: [
          {
            en: 'Whisk 3 tablespoons of fresh curd with 1 cup of room-temperature or cool water until smooth and frothy.',
            te: 'తాజా పెరుగులో ఒక కప్పు నీరు పోసి ఉండలు లేకుండా బాగా చిలకండి.',
          },
          {
            en: 'Stir in roasted cumin powder and finely crushed mint leaves.',
            te: 'దానిలో వేయించిన జీలకర్ర పొడి మరియు నలిపిన పుదీనా ఆకులు కలపండి.',
          },
        ],
        usageInstructions: {
          en: 'Sip slowly 20–30 minutes after lunch or when experiencing mild acidity.',
          te: 'మధ్యాహ్న భోజనం తర్వాత 20–30 నిమిషాలకు లేదా ఎసిడిటీ అనిపించినప్పుడు నెమ్మదిగా తాగండి.',
        },
        precautions: [
          {
            en: 'Do not use sour/fermented curd for acidity—only fresh sweet curd helps soothe acid.',
            te: 'పులిసిపోయిన పెరుగు ఎసిడిటీని పెంచుతుంది కాబట్టి తాజా పెరుగు మాత్రమే వాడండి.',
          },
          {
            en: 'Avoid iced cold drinks right before bed; drink at cool room temperature.',
            te: 'మరీ ఐస్ చల్లని మజ్జిగ కాకుండా సాధారణ చల్లదనంతో తాగండి.',
          },
        ],
      },
      {
        id: 'indigestion_jeera_saunf_tea',
        title: { en: 'Cumin, Fennel & Ginger Tea', te: 'జీలకర్ర, సోంపు & అల్లం కషాయం' },
        summary: {
          en: 'Calms nausea, spasms, and sluggish digestion comfortably.',
          te: 'వికారం, కడుపు నొప్పి మరియు మందగించిన జీర్ణక్రియను మెరుగుపరుస్తుంది.',
        },
        prepTimeMinutes: 6,
        reliefType: { en: 'Herbal Tea', te: 'జీర్ణక్రియ టీ' },
        matchedSymptomIds: ['mild_nausea', 'bloating_gas', 'heavy_stomach', 'acidity_burn'],
        ingredients: [
          {
            id: 'jeera_saunf',
            name: { en: 'Cumin + Fennel Seeds', te: 'జీలకర్ర + సోంపు' },
            quantity: { en: '1/2 tsp each', te: 'చెరో 1/2 టీస్పూన్' },
            alternative: {
              name: { en: 'Coriander seeds + Mint leaves', te: 'ధనియాలు + పుదీనా' },
              quantity: { en: '1 tsp coriander + 5 mint leaves', te: '1 స్పూన్ ధనియాలు + 5 పుదీనా ఆకులు' },
              note: {
                en: 'Coriander and mint are gentle when fennel is out of stock.',
                te: 'సోంపు లేకపోతే ధనియాలు, పుదీనా కడుపుకు చల్లగా ఉంటాయి.',
              },
            },
          },
          {
            id: 'ginger_dig',
            name: { en: 'Fresh Ginger (thin slices)', te: 'తాజా అల్లం ముక్కలు' },
            quantity: { en: '2 thin slices (omit if severe heartburn)', te: '2 పల్చని ముక్కలు' },
            alternative: {
              name: { en: 'Green Cardamom (crushed)', te: 'దంచిన యాలక్కాయ' },
              quantity: { en: '1 pod', te: '1 కాయ' },
              note: {
                en: 'Cardamom eases nausea gently without spicy heat.',
                te: 'వికారాన్ని తగ్గించడానికి అల్లం లేనప్పుడు యాలక్కాయ బాగా పనిచేస్తుంది.',
              },
            },
          },
        ],
        preparationSteps: [
          {
            en: 'Boil 1.5 cups of water with cumin, fennel, and ginger slices for 5 minutes.',
            te: '1.5 కప్పుల నీటిలో జీలకర్ర, సోంపు, అల్లం ముక్కలు వేసి 5 నిమిషాలు మరిగించండి.',
          },
          {
            en: 'Strain and sip slowly while warm.',
            te: 'వడపోసి గోరువెచ్చగా ఉన్నప్పుడు నెమ్మదిగా తాగండి.',
          },
        ],
        usageInstructions: {
          en: 'Sip 1 cup slowly after meals or when feeling mildly nauseous.',
          te: 'భోజనం తర్వాత లేదా వికారంగా అనిపించినప్పుడు ఒక కప్పు నెమ్మదిగా తాగండి.',
        },
        precautions: [
          {
            en: 'Stay upright for 30 minutes after drinking; avoid lying flat immediately after eating.',
            te: 'తాగిన తర్వాత లేదా తిన్న వెంటనే పడుకోకుండా కనీసం 30 నిమిషాలు కూర్చోండి.',
          },
        ],
      },
    ],
    medicalRedFlags: [
      {
        en: 'Severe, sudden, or worsening abdominal pain (especially lower-right side)',
        te: 'అకస్మాత్తుగా వచ్చే తీవ్రమైన కడుపు నొప్పి (ముఖ్యంగా కుడివైపు క్రింది భాగంలో)',
      },
      {
        en: 'Chest pain radiating to arm/jaw, sweating, or shortness of breath (can mimic heartburn)',
        te: 'చేయి లేదా దవడకు పాకే ఛాతీ నొప్పి, చెమటలు పట్టడం (గుండె నొప్పిని ఎసిడిటీగా పొరబడకండి)',
      },
      {
        en: 'Persistent vomiting, black/bloody stools, or high fever',
        te: 'ఆగని వాంతులు, మలం నల్లగా లేదా రక్తంతో రావడం, లేదా అధిక జ్వరం',
      },
    ],
  },
  {
    id: 'headache',
    pillar: 'pain_skin',
    name: { en: 'Headache & Sinus Pressure', te: 'తలనొప్పి & సైనస్ భారం' },
    shortDesc: {
      en: 'Warm aromatic teas, forehead compresses, and gentle steam for tension or sinus ache.',
      te: 'ఒత్తిడి తలనొప్పి మరియు సైనస్ తలభారం తగ్గించే అల్లం టీ, పట్టీలు మరియు ఆవిరి.',
    },
    symptoms: [
      { id: 'tension_band', label: { en: 'Tight band / neck stiffness', te: 'నుదురు / మెడ బిగుతుగా నొప్పి' } },
      { id: 'sinus_heavy', label: { en: 'Heavy cheeks / forehead sinus', te: 'సైనస్ / కళ్ళ చుట్టూ భారం' } },
      { id: 'screen_fatigue', label: { en: 'Eye strain / screen fatigue', te: 'స్క్రీన్ అలసట వల్ల తలనొప్పి' } },
    ],
    remedies: [
      {
        id: 'headache_ginger_cardamom_tea',
        title: { en: 'Ginger, Cardamom & Mint Tension Tea', te: 'అల్లం, యాలకులు & పుదీనా టీ' },
        summary: {
          en: 'Hydrates and relaxes mild vascular tension headaches without heavy caffeine.',
          te: 'నిర్జలీకరణాన్ని మరియు ఒత్తిడి వల్ల వచ్చే తలనొప్పిని ప్రశాంతంగా తగ్గిస్తుంది.',
        },
        prepTimeMinutes: 6,
        reliefType: { en: 'Calming Infusion', te: 'విశ్రాంతి పానీయం' },
        matchedSymptomIds: ['tension_band', 'screen_fatigue'],
        ingredients: [
          {
            id: 'ginger_head',
            name: { en: 'Fresh Ginger (crushed)', te: 'దంచిన తాజా అల్లం' },
            quantity: { en: '1/2 inch piece', te: 'అర అంగుళం ముక్క' },
            alternative: {
              name: { en: 'Dry Ginger Powder + Lemon Squeeze', te: 'సొంఠి పొడి + నిమ్మరసం' },
              quantity: { en: '1/4 tsp dry ginger + few drops lemon', te: '1/4 స్పూన్ సొంఠి + కొన్ని చుక్కల నిమ్మరసం' },
              note: {
                en: 'Warm lemon water with a tiny pinch of dry ginger helps hydration headaches.',
                te: 'డీహైడ్రేషన్ వల్ల వచ్చే తలనొప్పికి నిమ్మరసం గోరువెచ్చని నీరు ఎంతో మంచిది.',
              },
            },
          },
          {
            id: 'cardamom_mint',
            name: { en: 'Green Cardamom + Fresh Mint', te: 'యాలకులు + పుదీనా ఆకులు' },
            quantity: { en: '2 crushed pods + 5 mint leaves', te: '2 దంచిన యాలకులు + 5 పుదీనా ఆకులు' },
            alternative: {
              name: { en: 'Cinnamon stick or Tulsi leaves', te: 'దాల్చినచెక్క లేదా తులసి ఆకులు' },
              quantity: { en: '1/2 inch cinnamon or 6 tulsi leaves', te: 'అర అంగుళం దాల్చినచెక్క లేదా 6 తులసి ఆకులు' },
              note: {
                en: 'Aromatics help relax tense facial muscles while sipping.',
                te: 'తులసి లేదా దాల్చినచెక్క సువాసన తలలోని ఒత్తిడిని తగ్గిస్తుంది.',
              },
            },
          },
        ],
        preparationSteps: [
          {
            en: 'Simmer crushed ginger and cardamom pods in 1.5 cups of water for 5 minutes.',
            te: '1.5 కప్పుల నీటిలో అల్లం, యాలకులు వేసి 5 నిమిషాలు మరిగించండి.',
          },
          {
            en: 'Turn off heat, drop in mint leaves, cover for 2 minutes, then strain.',
            te: 'స్టవ్ ఆపి పుదీనా ఆకులు వేసి 2 నిమిషాలు మూత పెట్టి వడపోయండి.',
          },
          {
            en: 'Sit in a quiet, dimly lit space away from phone/laptop screens while sipping slowly.',
            te: 'మొబైల్ లేదా టీవీ స్క్రీన్లకు దూరంగా ప్రశాంతమైన గదిలో కూర్చుని నెమ్మదిగా తాగండి.',
          },
        ],
        usageInstructions: {
          en: 'Drink 1 warm cup along with 1 glass of plain water (dehydration is a common headache trigger).',
          te: 'ఈ టీతో పాటు ఒక గ్లాసు సాధారణ నీరు కూడా తాగండి (నీటి కొరత వల్ల కూడా తలనొప్పి వస్తుంది).',
        },
        precautions: [
          {
            en: 'Rest eyes for 15–20 minutes; if hunger triggered the headache, eat a balanced snack promptly.',
            te: 'కళ్ళకు 15–20 నిమిషాలు విశ్రాంతి ఇవ్వండి; ఆకలి వల్ల తలనొప్పి వస్తే వెంటనే తేలికపాటి ఆహారం తీసుకోండి.',
          },
        ],
      },
      {
        id: 'headache_compress_steam',
        title: { en: 'Warm Neck Compress (Tension) or Peppermint Steam (Sinus)', te: 'మెడకు వెచ్చని కాపడం లేదా పుదీనా ఆవిరి' },
        summary: {
          en: 'Matches temperature therapy to the source: warm compress for tight neck, steam for sinus pressure.',
          te: 'మెడ బిగుతుకు వెచ్చని కాపడం, సైనస్ భారానికి ఆవిరి ద్వారా తక్షణ ఉపశమనం.',
        },
        prepTimeMinutes: 4,
        reliefType: { en: 'Targeted Compress', te: 'కాపడం / ఆవిరి' },
        matchedSymptomIds: ['sinus_heavy', 'tension_band', 'screen_fatigue'],
        ingredients: [
          {
            id: 'towel_water',
            name: { en: 'Clean Towel + Warm or Cool Water', te: 'శుభ్రమైన టవల్ + నీరు' },
            quantity: { en: '1 small towel', te: '1 చిన్న టవల్' },
            alternative: {
              name: { en: 'Wrapped cool cloth for throbbing forehead', te: 'నుదుటిపై చల్లని తడి వస్త్రం' },
              quantity: { en: '10 minutes on forehead/eyes', te: '10 నిమిషాలు నుదురు/కళ్ళపై' },
              note: {
                en: 'Use cool cloth on forehead for throbbing headaches; warm cloth on back of neck for tension.',
                te: 'కొట్టుకునే తలనొప్పికి నుదుటిపై చల్లని పట్టీ, మెడ బిగుతుకు మెడ వెనుక వెచ్చని కాపడం వాడండి.',
              },
            },
          },
          {
            id: 'mint_steam',
            name: { en: 'Crushed Mint or Ajwain (for sinus steam)', te: 'నలిపిన పుదీనా లేదా వాము (సైనస్ ఆవిరి కోసం)' },
            quantity: { en: '1 tbsp mint or 1 tsp ajwain', te: '1 టేబుల్‌స్పూన్ పుదీనా లేదా 1 స్పూన్ వాము' },
            alternative: {
              name: { en: 'Warm Clove & Water Forehead Paste', te: 'లవంగం నీటి పేస్ట్ (నుదుటికి)' },
              quantity: { en: '2 cloves rubbed on clean stone with few drops water', te: '2 లవంగాలు నీటితో అరగదీసిన గంధం' },
              note: {
                en: 'Clove paste on temples gives a mild tingling relief; wash off if skin tingles too strongly.',
                te: 'కణతలపై లవంగ గంధం పల్చగా రాస్తే ఉపశమనం ఉంటుంది; మంటగా అనిపిస్తే కడిగేయండి.',
              },
            },
          },
        ],
        preparationSteps: [
          {
            en: 'For tension/screen ache: place a warm damp towel on the back of your neck and a cool damp cloth over closed eyes.',
            te: 'మెడ బిగుతుకు: మెడ వెనుక గోరువెచ్చని తడి టవల్ వేసి, మూసిన కళ్ళపై చల్లని తడి వస్త్రాన్ని ఉంచండి.',
          },
          {
            en: 'For sinus pressure: inhale warm mint/ajwain steam for 5 minutes to drain blocked sinus passages.',
            te: 'సైనస్ భారం ఉంటే: 5 నిమిషాలు పుదీనా లేదా వాము ఆవిరి పీల్చండి.',
          },
        ],
        usageInstructions: {
          en: 'Rest quietly with slow belly breathing for 10–15 minutes.',
          te: 'కళ్ళు మూసుకుని 10–15 నిమిషాలు ప్రశాంతంగా విశ్రాంతి తీసుకోండి.',
        },
        precautions: [
          {
            en: 'Keep clove paste strictly away from eyes and eyelids.',
            te: 'లవంగం లేపనం కళ్ళలో పడకుండా జాగ్రత్త వహించండి.',
          },
        ],
      },
    ],
    medicalRedFlags: [
      {
        en: 'Sudden, explosive "thunderclap" severe headache',
        te: 'అకస్మాత్తుగా భరించలేనంత తీవ్రమైన తలనొప్పి రావడం',
      },
      {
        en: 'Headache with stiff neck, fever, confusion, slurred speech, weakness, or blurred vision',
        te: 'మెడ బిగుసుకుపోవడం, జ్వరం, మగత, మాట తడబాటు లేదా చూపు మసకబారడంతో కూడిన తలనొప్పి',
      },
      {
        en: 'Headache following a head injury or getting steadily worse over days',
        te: 'తలకు దెబ్బ తగిలిన తర్వాత వచ్చిన తలనొప్పి',
      },
    ],
  },
  {
    id: 'toothache',
    pillar: 'pain_skin',
    name: { en: 'Toothache & Gum Discomfort', te: 'పంటి నొప్పి & చిగుళ్ల వాపు' },
    shortDesc: {
      en: 'Temporary numbing clove care and warm saltwater rinses until you see a dentist.',
      te: 'దంత వైద్యుడిని కలిసే వరకు తాత్కాలిక ఉపశమనానికి లవంగం మరియు ఉప్పు నీటి పుక్కిలింతలు.',
    },
    symptoms: [
      { id: 'tooth_throb', label: { en: 'Throbbing toothache', te: 'పంటిలో కొట్టుకునే నొప్పి' } },
      { id: 'gum_swollen', label: { en: 'Tender / puffy gums', te: 'చిగుళ్ల వాపు & నొప్పి' } },
      { id: 'cold_sensitive', label: { en: 'Sensitivity to cold/sweets', te: 'చల్లని/తీపి తగిలితే జివ్వుమనడం' } },
    ],
    remedies: [
      {
        id: 'tooth_clove_compress',
        title: { en: 'Whole Clove / Diluted Clove Oil Compress', te: 'లవంగం లేదా డైల్యూట్ చేసిన లవంగ నూనె' },
        summary: {
          en: 'Natural eugenol in cloves gently numbs localized tooth nerve discomfort temporarily.',
          te: 'లవంగంలో ఉండే యూజినాల్ అనే సహజ గుణం పంటి నొప్పిని తాత్కాలికంగా మత్తుగా చేసి తగ్గిస్తుంది.',
        },
        prepTimeMinutes: 2,
        reliefType: { en: 'Targeted Oral Care', te: 'పంటిపై పెట్టే చిట్కా' },
        matchedSymptomIds: ['tooth_throb', 'cold_sensitive'],
        ingredients: [
          {
            id: 'clove',
            name: { en: 'Whole Clove (Lavang) or Clove Oil', te: 'లవంగం మొగ్గ లేదా లవంగ నూనె' },
            quantity: { en: '1 whole clove or 1 drop clove oil in 1/2 tsp carrier oil', te: '1 లవంగం లేదా 1 చుక్క నూనె (అర స్పూన్ కొబ్బరి నూనెలో)' },
            alternative: {
              name: { en: 'Crushed Garlic Paste + Salt Pinch', te: 'దంచిన వెల్లుల్లి + చిటికెడు ఉప్పు' },
              quantity: { en: '1/2 clove crushed gently', te: 'సగం రెబ్బ' },
              note: {
                en: 'If cloves are unavailable, hold a warm saltwater rinse and apply a cold cheek compress externally.',
                te: 'లవంగం లేకపోతే గోరువెచ్చని ఉప్పు నీటితో పుక్కిలించి, బయట బుగ్గపై చల్లని కాపడం పెట్టండి.',
              },
            },
          },
        ],
        preparationSteps: [
          {
            en: 'First rinse your mouth gently with lukewarm water to dislodge any trapped food.',
            te: 'ముందుగా గోరువెచ్చని నీటితో నోరు పుక్కిలించి పంటి వద్ద ఇరుక్కున్న ఆహారాన్ని తొలగించండి.',
          },
          {
            en: 'Place 1 whole clove gently near the aching tooth until softened (do not bite hard), OR dab a cotton ball dipped in 1 drop clove oil diluted with 1/2 tsp coconut/sesame oil against the tooth.',
            te: 'ఒక లవంగాన్ని నొప్పి ఉన్న పంటి దగ్గర మెల్లగా ఉంచండి, లేదా అర స్పూన్ కొబ్బరి నూనెలో 1 చుక్క లవంగ నూనె కలిపి దూదితో పంటిపై ఉంచండి.',
          },
        ],
        usageInstructions: {
          en: 'Hold for 10–15 minutes, then remove and spit. Book a dental checkup as home care does not fix cavities.',
          te: '10–15 నిమిషాలు ఉంచి తీసివేసి ఉమ్మేయండి. పుచ్చు పన్ను తగ్గడానికి తప్పకుండా దంత వైద్యుడిని కలవాలి.',
        },
        precautions: [
          {
            en: 'NEVER apply undiluted pure clove oil directly to gums—it can burn delicate gum tissue.',
            te: 'శుద్ధమైన లవంగ నూనెను కొబ్బరి/నువ్వుల నూనెతో కలపకుండా నేరుగా చిగుళ్లపై రాయకండి; చిగుళ్లు కాలే ప్రమాదం ఉంది.',
          },
          {
            en: 'Not suitable for young children (risk of swallowing clove or tissue irritation).',
            te: 'చిన్న పిల్లలకు లవంగం ఇవ్వకండి.',
          },
        ],
      },
      {
        id: 'tooth_salt_guava_rinse',
        title: { en: 'Warm Saltwater & Guava Leaf Rinse', te: 'గోరువెచ్చని ఉప్పు & జామ ఆకుల నీటి పుక్కిలింత' },
        summary: {
          en: 'Cleanses tender gums and reduces mild puffiness gently.',
          te: 'వాచిన చిగుళ్లను శుభ్రపరచి వాపును తగ్గించే మృదువైన పుక్కిలింత.',
        },
        prepTimeMinutes: 5,
        reliefType: { en: 'Gum Rinse', te: 'నోటి పుక్కిలింత' },
        matchedSymptomIds: ['gum_swollen', 'tooth_throb', 'cold_sensitive'],
        ingredients: [
          {
            id: 'guava_leaves',
            name: { en: 'Tender Guava Leaves (Jaama Aaku)', te: 'లేత జామ ఆకులు' },
            quantity: { en: '4–5 washed leaves', te: '4–5 శుభ్రమైన ఆకులు' },
            alternative: {
              name: { en: 'Turmeric Powder (1/4 tsp) + Salt', te: 'పసుపు (1/4 స్పూన్) + ఉప్పు' },
              quantity: { en: '1/4 tsp turmeric + 1/2 tsp salt', te: '1/4 స్పూన్ పసుపు + 1/2 స్పూన్ ఉప్పు' },
              note: {
                en: 'Warm saltwater with turmeric works well when guava leaves are not nearby.',
                te: 'జామ ఆకులు అందుబాటులో లేకపోతే పసుపు, ఉప్పు నీటితో పుక్కిలించవచ్చు.',
              },
            },
          },
        ],
        preparationSteps: [
          {
            en: 'Boil 4–5 washed guava leaves in 1 glass of water for 5 minutes.',
            te: 'ఒక గ్లాసు నీటిలో జామ ఆకులను వేసి 5 నిమిషాలు మరిగించండి.',
          },
          {
            en: 'Strain, add 1/2 tsp salt, and let cool to lukewarm before swishing gently for 30 seconds and spitting out.',
            te: 'వడకట్టి అర స్పూన్ ఉప్పు కలిపి, గోరువెచ్చగా ఉన్నప్పుడు 30 సెకన్లు నోట్లో పుక్కిలించి ఉమ్మేయండి.',
          },
        ],
        usageInstructions: {
          en: 'Rinse 2–3 times daily after meals.',
          te: 'భోజనం తర్వాత రోజుకు 2–3 సార్లు పుక్కిలించండి.',
        },
        precautions: [
          {
            en: 'Do not swallow the rinse water. Always visit a dentist for persistent toothache.',
            te: 'ఈ నీటిని మింగకండి. పంటి నొప్పి కొనసాగితే దంత వైద్యుడిని కలవండి.',
          },
        ],
      },
    ],
    medicalRedFlags: [
      {
        en: 'Visible cheek/jaw swelling, pus discharge, or fever (signs of dental abscess)',
        te: 'బుగ్గ లేదా దవడ వాపు, చీము రావడం లేదా జ్వరం',
      },
      {
        en: 'Difficulty opening mouth, swallowing, or breathing',
        te: 'నోరు తెరవడానికి, మింగడానికి లేదా శ్వాసకు ఇబ్బంది',
      },
    ],
  },
  {
    id: 'minor_burns_skin',
    pillar: 'pain_skin',
    name: { en: 'Minor Kitchen Burns & Surface Scrapes', te: 'చిన్న కాలిన గాయాలు & చర్మపు గీతలు' },
    shortDesc: {
      en: 'First-aid cool running water and gentle aloe vera soothing for mild surface skin discomfort.',
      te: 'చిన్నపాటి కాలిన మంటకు చల్లని నీరు మరియు తాజా కలబంద గుజ్జు ప్రథమ చికిత్స.',
    },
    symptoms: [
      { id: 'mild_burn', label: { en: 'Mild red burn (no blisters)', te: 'తేలికపాటి ఎర్రని మంట (బొబ్బలు లేకుండా)' } },
      { id: 'minor_scrape', label: { en: 'Small paper cut / graze', te: 'చిన్న గీత లేదా దొరుకు' } },
      { id: 'itch_bite', label: { en: 'Mild insect bite itch', te: 'దోమ/కీటకం కుట్టిన దురద' } },
    ],
    remedies: [
      {
        id: 'skin_cool_aloe',
        title: { en: 'Cool Running Water + Fresh Aloe Vera Gel', te: 'చల్లని ప్రవహించే నీరు + తాజా కలబంద గుజ్జు' },
        summary: {
          en: 'First cool the burn thoroughly with clean running tap water, then soothe intact skin with aloe.',
          te: 'ముందుగా చల్లని కుళాయి నీటితో మంటను తగ్గించి, ఆపై కలబందతో చర్మాన్ని శాంతపరిచే విధానం.',
        },
        prepTimeMinutes: 15,
        reliefType: { en: 'First-Aid Cooling', te: 'ప్రథమ చికిత్స' },
        matchedSymptomIds: ['mild_burn', 'itch_bite'],
        ingredients: [
          {
            id: 'cool_water',
            name: { en: 'Cool Running Tap Water (NOT Ice)', te: 'సాధారణ చల్లని కుళాయి నీరు (ఐస్ కాదు)' },
            quantity: { en: '10–15 minutes continuous rinse', te: '10–15 నిమిషాలు నీటి కింద ఉంచడం' },
            alternative: {
              name: { en: 'Clean Cool Wet Compress', te: 'చల్లని శుభ్రమైన తడి వస్త్రం' },
              quantity: { en: '15 minutes continuous cooling', te: '15 నిమిషాలు' },
              note: {
                en: 'Never apply butter, ghee, toothpaste, or ice directly to a fresh burn—they trap heat or damage skin.',
                te: 'కాలిన చోట టూత్‌పేస్ట్, నెయ్యి, నూనె లేదా ఐస్ అస్సలు పెట్టకండి; అవి చర్మాన్ని మరింత దెబ్బతీస్తాయి.',
              },
            },
          },
          {
            id: 'aloe_gel',
            name: { en: 'Fresh Aloe Vera Inner Gel', te: 'తాజా కలబంద లోపలి గుజ్జు' },
            quantity: { en: '1 tablespoon clean transparent gel', te: '1 టేబుల్‌స్పూన్ పారదర్శక గుజ్జు' },
            alternative: {
              name: { en: 'Sandalwood (Chandan) / Rose Water Paste (for itch)', te: 'గంధం + రోజ్ వాటర్ (దురదకు)' },
              quantity: { en: 'Thin cooling layer', te: 'పల్చగా రాయడం' },
              note: {
                en: 'Only apply soothing gels after the burn has cooled completely and only if skin is unbroken.',
                te: 'వేడి పూర్తిగా తగ్గిన తర్వాత, చర్మం చిరగకుండా ఉంటేనే కలబంద రాయాలి.',
              },
            },
          },
        ],
        preparationSteps: [
          {
            en: 'Immediately hold the minor burned area under cool (not ice-cold) running water for 10–15 minutes until stinging stops.',
            te: 'కాలిన వెంటనే కనీసం 10–15 నిమిషాలు చల్లని (ఐస్ కాదు) కుళాయి నీటి కింద ఉంచండి.',
          },
          {
            en: 'Pat dry gently with a clean cloth. If using fresh aloe leaf, wash off the yellow sap near the rind completely, scoop the clear inner gel, and apply a thin layer.',
            te: 'శుభ్రమైన వస్త్రంతో అద్ది, కలబంద ఆకులోని పసుపు రంగు రసాన్ని కడిగేసి, లోపలి తెల్లని గుజ్జును పల్చగా రాయండి.',
          },
        ],
        usageInstructions: {
          en: 'Reapply clean aloe gel 2 times daily on unbroken skin and keep loosely covered if rubbing against clothes.',
          te: 'చర్మం చిరగకుండా ఉంటే రోజుకు 2 సార్లు కలబంద గుజ్జు రాసి గాలి తగిలేలా ఉంచండి.',
        },
        precautions: [
          {
            en: 'NEVER put toothpaste, butter, oil, ice, or turmeric powder onto a fresh burn.',
            te: 'కొత్తగా కాలిన గాయంపై టూత్‌పేస్ట్, నూనె, వెన్న, ఐస్ లేదా పొడి పసుపు అస్సలు వేయకండి.',
          },
          {
            en: 'Wash off the bitter yellow latex from fresh aloe leaves before applying, and patch-test first.',
            te: 'కలబంద ఆకు కత్తిరించినప్పుడు వచ్చే పసుపు రసం చర్మానికి దురద కలిగిస్తుంది, దాన్ని శుభ్రంగా కడిగిన తర్వాతే గుజ్జు వాడండి.',
          },
        ],
      },
      {
        id: 'skin_honey_scrape',
        title: { en: 'Clean Saline Wash + Thin Honey Dressing', te: 'శుభ్రమైన నీటి కడుగు + స్వచ్ఛమైన తేనె పూత' },
        summary: {
          en: 'Keeps very minor surface grazes clean and moisturized while healing.',
          te: 'చిన్నపాటి ఉపరితల గీతలను శుభ్రంగా ఉంచి త్వరగా మానేలా చేస్తుంది.',
        },
        prepTimeMinutes: 4,
        reliefType: { en: 'Surface Wound Care', te: 'చిన్న గీతల సంరక్షణ' },
        matchedSymptomIds: ['minor_scrape'],
        ingredients: [
          {
            id: 'clean_water_wash',
            name: { en: 'Clean Water & Mild Soap', te: 'శుభ్రమైన నీరు & మైల్డ్ సబ్బు' },
            quantity: { en: 'Rinse gently around area', te: 'శుభ్రంగా కడగడానికి' },
            alternative: {
              name: { en: 'Cooled Boiled Saltwater (1/4 tsp salt in 1 cup)', te: 'చల్లార్చిన గోరువెచ్చని ఉప్పు నీరు' },
              quantity: { en: '1 cup', te: '1 కప్పు' },
              note: {
                en: 'Gentle saline rinse cleans dirt without stinging.',
                te: 'మరిగించి చల్లార్చిన ఉప్పు నీరు మంట లేకుండా గాయాన్ని శుభ్రం చేస్తుంది.',
              },
            },
          },
          {
            id: 'honey_dressing',
            name: { en: 'Pure Raw Honey', te: 'స్వచ్ఛమైన తేనె' },
            quantity: { en: 'A thin dab', te: 'కొద్దిగా పూత' },
            alternative: {
              name: { en: 'Pure Coconut Oil or Petroleum Jelly + Clean Bandage', te: 'కొబ్బరి నూనె + శుభ్రమైన బ్యాండేజ్' },
              quantity: { en: 'Thin protective layer', te: 'పల్చని పొర' },
              note: {
                en: 'Keeping minor scrapes gently covered and moist prevents scab cracking.',
                te: 'తేనె లేకపోతే కొబ్బరి నూనె రాసి శుభ్రమైన బ్యాండేజ్ వేయవచ్చు.',
              },
            },
          },
        ],
        preparationSteps: [
          {
            en: 'Wash hands first, then rinse the minor scrape thoroughly under clean running water.',
            te: 'ముందుగా చేతులు కడుక్కొని, గాయాన్ని శుభ్రమైన ప్రవహించే నీటితో కడగండి.',
          },
          {
            en: 'Pat dry with clean gauze, apply a thin dab of pure honey, and cover with a clean sterile bandage.',
            te: 'శుభ్రమైన కాటన్ లేదా గాజుతో తుడిచి, కొద్దిగా తేనె రాసి బ్యాండేజ్ వేయండి.',
          },
        ],
        usageInstructions: {
          en: 'Change bandage daily and keep the area clean and dry.',
          te: 'రోజుకోసారి బ్యాండేజ్ మార్చి గాయాన్ని శుభ్రంగా ఉంచండి.',
        },
        precautions: [
          {
            en: 'Only for very shallow surface scrapes. Do NOT use on deep cuts, puncture wounds, animal bites, or rusty metal injuries.',
            te: 'కేవలం చిన్న ఉపరితల గీతలకు మాత్రమే. లోతైన కోతలు, జంతువుల కాటు లేదా తుప్పు ఇనుము గాయాలకు వెంటనే డాక్టర్ దగ్గరకు వెళ్లండి.',
          },
        ],
      },
    ],
    medicalRedFlags: [
      {
        en: 'Blistering burns larger than a coin, burns on face/hands/joints, or electrical/chemical burns',
        te: 'నాణెం కంటే పెద్ద బొబ్బలు వచ్చిన కాలిన గాయాలు, లేదా ముఖం, చేతులు, కీళ్లపై కాలిన గాయాలు',
      },
      {
        en: 'Deep bleeding cuts, rusty metal injuries (may need tetanus shot), spreading redness, warmth, or pus',
        te: 'ఆగని రక్తస్రావం, లోతైన కోతలు, ఇనుప వస్తువు గాయాలు (టిటనస్ ఇంజెక్షన్ అవసరం కావచ్చు) లేదా చీము పట్టడం',
      },
    ],
  },
  {
    id: 'fatigue_dehydration',
    pillar: 'digestive',
    name: { en: 'Fatigue & Mild Dehydration', te: 'నీరసం & డీహైడ్రేషన్' },
    shortDesc: {
      en: 'Simple homemade electrolyte hydration and cooling drinks to restore energy.',
      te: 'ఎండ లేదా అలసట వల్ల వచ్చిన నీరసాన్ని త్వరగా తగ్గించే ఇంట్లోనే చేసుకునే ఓఆర్ఎస్ & సబ్జా పానీయాలు.',
    },
    symptoms: [
      { id: 'tiredness', label: { en: 'Sudden tiredness / weakness', te: 'అకస్మాత్తుగా నీరసం & అలసట' } },
      { id: 'dry_mouth', label: { en: 'Dry mouth & heavy thirst', te: 'నోరు ఎండిపోవడం & దాహం' } },
      { id: 'leg_cramp', label: { en: 'Mild muscle cramp after heat', te: 'ఎండ తర్వాత కండరాల పట్టేయడం' } },
    ],
    remedies: [
      {
        id: 'fatigue_homemade_ors',
        title: { en: 'Homemade Lemon, Salt & Sugar/Jaggery Electrolyte Drink', te: 'నిమ్మకాయ, ఉప్పు & చక్కెర/బెల్లం ఓఆర్ఎస్' },
        summary: {
          en: 'Balances fluids and essential salts quickly after summer heat, mild sweating, or tiredness.',
          te: 'కోల్పోయిన లవణాలు మరియు నీటిని శరీరానికి వేగంగా తిరిగి అందిస్తుంది.',
        },
        prepTimeMinutes: 3,
        reliefType: { en: 'Rehydration Drink', te: 'శక్తినిచ్చే పానీయం' },
        matchedSymptomIds: ['tiredness', 'dry_mouth', 'leg_cramp'],
        ingredients: [
          {
            id: 'clean_drinking_water',
            name: { en: 'Clean Drinking Water', te: 'శుభ్రమైన తాగునీరు' },
            quantity: { en: '1 large glass (300 ml)', te: '1 పెద్ద గ్లాసు (300 మి.లీ)' },
            alternative: {
              name: { en: 'Fresh Tender Coconut Water', te: 'లేత కొబ్బరి నీళ్లు' },
              quantity: { en: '1 glass (skip added sugar)', te: '1 గ్లాసు (చక్కెర కలపకుండా)' },
              note: {
                en: 'Tender coconut water is naturally rich in potassium and gentle electrolytes.',
                te: 'కొబ్బరి నీళ్లలో సహజంగానే పొటాషియం మరియు ఎలక్ట్రోలైట్లు సమృద్ధిగా ఉంటాయి.',
              },
            },
          },
          {
            id: 'sugar_jaggery',
            name: { en: 'Jaggery Powder or Cane Sugar', te: 'బెల్లం పొడి లేదా చక్కెర' },
            quantity: { en: '2 teaspoons', te: '2 టీస్పూన్లు' },
            alternative: {
              name: { en: 'Honey', te: 'తేనె' },
              quantity: { en: '1.5 teaspoons', te: '1.5 టీస్పూన్లు' },
              note: {
                en: 'Avoid adding excess sugar; balanced proportions help absorption best.',
                te: 'తగిన మోతాదులో తీపి ఉండటం వల్ల శరీరం నీటిని త్వరగా గ్రహిస్తుంది.',
              },
            },
          },
          {
            id: 'salt_lemon',
            name: { en: 'Pinch of Salt + Lemon Juice', te: 'చిటికెడు ఉప్పు + నిమ్మరసం' },
            quantity: { en: '1/4 tsp salt + juice of 1/2 lemon', te: 'పావు స్పూన్ ఉప్పు + సగం నిమ్మకాయ రసం' },
            alternative: {
              name: { en: 'Rock Salt (Sendha Namak) + Amla / Orange juice splash', te: 'సైంధవ లవణం + నారింజ/ఉసిరి రసం' },
              quantity: { en: '1/4 tsp salt + 1 tbsp citrus juice', te: 'పావు స్పూన్ ఉప్పు + 1 స్పూన్ రసం' },
              note: {
                en: 'Even without lemon, water + exact pinch of salt + sugar works as basic rehydration.',
                te: 'నిమ్మకాయ లేకపోయినా నీరు, తగినంత ఉప్పు, చక్కెర కలిపి తాగవచ్చు.',
              },
            },
          },
        ],
        preparationSteps: [
          {
            en: 'Stir 2 teaspoons jaggery/sugar and 1/4 teaspoon salt into 1 glass (300 ml) of clean water until completely dissolved.',
            te: 'ఒక పెద్ద గ్లాసు (300 మి.లీ) నీటిలో 2 టీస్పూన్ల బెల్లం లేదా చక్కెర, పావు టీస్పూన్ ఉప్పు వేసి పూర్తిగా కరిగించండి.',
          },
          {
            en: 'Squeeze in half a fresh lemon, stir well, and sip slowly rather than gulping all at once.',
            te: 'సగం నిమ్మకాయ రసం పిండి బాగా కలిపి, ఒకేసారి కాకుండా నెమ్మదిగా సిప్ చేస్తూ తాగండి.',
          },
        ],
        usageInstructions: {
          en: 'Sip over 15–20 minutes while resting in a cool, shaded place.',
          te: 'చల్లని, నీడ ఉన్న ప్రదేశంలో విశ్రాంతి తీసుకుంటూ 15–20 నిమిషాల పాటు నెమ్మదిగా తాగండి.',
        },
        precautions: [
          {
            en: 'For diarrhea/vomiting, pharmacy-standard WHO ORS packets mixed strictly per instructions are safer than homemade mixes.',
            te: 'విరేచనాలు లేదా వాంతులు అవుతుంటే ఇంట్లో తయారుచేసిన దానికంటే మెడికల్ షాప్‌లో దొరికే WHO ORS ప్యాకెట్ వాడటం సురక్షితం.',
          },
          {
            en: 'People with diabetes, kidney disease, or severe hypertension should consult their doctor regarding salt/sugar ratios.',
            te: 'షుగర్, కిడ్నీ లేదా తీవ్రమైన బీపీ సమస్య ఉన్నవారు ఉప్పు/చక్కెర మోతాదు గురించి డాక్టర్ సలహా తీసుకోవాలి.',
          },
        ],
      },
      {
        id: 'fatigue_sabja_coolant',
        title: { en: 'Soaked Sabja (Basil Seeds) & Buttermilk Coolant', te: 'నానబెట్టిన సబ్జా గింజలు & మజ్జిగ పానీయం' },
        summary: {
          en: 'Cools body heat gently during summer fatigue and restores hydration.',
          te: 'వేసవి అలసట మరియు శరీర వేడిని చల్లబరచడంలో అద్భుతంగా సహాయపడుతుంది.',
        },
        prepTimeMinutes: 12,
        reliefType: { en: 'Body Coolant', te: 'శరీర తాపాన్ని తగ్గించేది' },
        matchedSymptomIds: ['dry_mouth', 'tiredness'],
        ingredients: [
          {
            id: 'sabja',
            name: { en: 'Sabja Seeds (Sweet Basil Seeds)', te: 'సబ్జా గింజలు' },
            quantity: { en: '1 teaspoon (soaked 10 min in water)', te: '1 టీస్పూన్ (10 నిమిషాలు నానబెట్టినవి)' },
            alternative: {
              name: { en: 'Chia Seeds or Gond Katira (soaked)', te: 'చియా గింజలు లేదా బాదం పిసిని' },
              quantity: { en: '1 teaspoon soaked', te: '1 టీస్పూన్ నానబెట్టినవి' },
              note: {
                en: 'Always soak sabja or chia seeds fully until translucent and gelatinous before drinking.',
                te: 'సబ్జా లేదా చియా గింజలను పూర్తిగా నాని ఉబ్బిన తర్వాతే తాగాలి.',
              },
            },
          },
          {
            id: 'buttermilk_cool',
            name: { en: 'Thin Buttermilk or Rose-Lemon Water', te: 'పల్చని మజ్జిగ లేదా నిమ్మ నీరు' },
            quantity: { en: '1 glass', te: '1 గ్లాసు' },
            alternative: {
              name: { en: 'Barley Water or Plain Cool Water', te: 'బార్లీ నీరు లేదా సాధారణ నీరు' },
              quantity: { en: '1 glass', te: '1 గ్లాసు' },
              note: {
                en: 'Barley water is another classic coolant when dairy is unavailable.',
                te: 'మజ్జిగ లేకపోతే బార్లీ నీటిలో కూడా సబ్జా గింజలు కలుపుకోవచ్చు.',
              },
            },
          },
        ],
        preparationSteps: [
          {
            en: 'Soak 1 teaspoon of sabja seeds in half a cup of water for 10 minutes until they swell fully.',
            te: '1 టీస్పూన్ సబ్జా గింజలను అర కప్పు నీటిలో 10 నిమిషాలు పూర్తిగా ఉబ్బేవరకు నానబెట్టండి.',
          },
          {
            en: 'Stir the soaked seeds into 1 glass of thin buttermilk (or lemon water) and sip calmly.',
            te: 'నానిన గింజలను పల్చని మజ్జిగ లేదా నిమ్మ నీటిలో కలిపి తాగండి.',
          },
        ],
        usageInstructions: {
          en: 'Drink midday or afternoon during hot weather.',
          te: 'ఎండలు ఎక్కువగా ఉన్నప్పుడు మధ్యాహ్నం సమయంలో తాగండి.',
        },
        precautions: [
          {
            en: 'NEVER swallow dry unsoaked sabja or chia seeds—they can swell in the throat and cause choking.',
            te: 'సబ్జా లేదా చియా గింజలను నానబెట్టకుండా పొడిగా ఎప్పుడూ తినకండి; అవి గొంతులో ఉబ్బి ఇబ్బంది కలిగిస్తాయి.',
          },
        ],
      },
    ],
    medicalRedFlags: [
      {
        en: 'Fainting, confusion, rapid heartbeat, or inability to keep fluids down',
        te: 'కళ్ళు తిరిగి పడిపోవడం, అయోమయం, గుండె వేగంగా కొట్టుకోవడం లేదా నీరు కూడా నిలబడకపోవడం',
      },
      {
        en: 'No urination for 8+ hours, dark tea-colored urine, or high fever during heat exposure (heatstroke)',
        te: '8 గంటలకు పైగా మూత్రం రాకపోవడం, ముదురు రంగు మూత్రం లేదా వడదెబ్బ లక్షణాలు (అధిక జ్వరం)',
      },
    ],
  },
  {
    id: 'constipation',
    pillar: 'digestive',
    name: { en: 'Mild Constipation', te: 'తేలికపాటి మలబద్ధకం' },
    shortDesc: {
      en: 'Warm hydration, soaked raisins/figs, and gentle fiber to ease sluggish bowel movement.',
      te: 'గోరువెచ్చని నీరు, నానబెట్టిన ఎండు ద్రాక్ష/అంజీర్ ద్వారా మలబద్ధకాన్ని సులభంగా తగ్గించే చిట్కాలు.',
    },
    symptoms: [
      { id: 'hard_stools', label: { en: 'Hard or dry stools', te: 'గట్టిగా మలవిసర్జన కావడం' } },
      { id: 'infrequent_bm', label: { en: 'Irregular / sluggish digestion', te: 'రోజూ మలవిసర్జన కాకపోవడం' } },
      { id: 'lower_heaviness', label: { en: 'Lower belly heaviness', te: 'పొత్తికడుపు బరువుగా అనిపించడం' } },
    ],
    remedies: [
      {
        id: 'constipation_soaked_raisins',
        title: { en: 'Overnight Soaked Black Raisins & Figs Water', te: 'నానబెట్టిన నల్ల ఎండు ద్రాక్ష & అంజీర్ నీరు' },
        summary: {
          en: 'Gentle soluble fiber and natural moisture soften stools without harsh stimulant laxatives.',
          te: 'కడుపు నొప్పి లేకుండా సహజమైన ఫైబర్ ద్వారా మలవిసర్జనను సాఫీగా చేస్తుంది.',
        },
        prepTimeMinutes: 5,
        reliefType: { en: 'Gentle Morning Fiber', te: 'సహజ ఫైబర్ పానీయం' },
        matchedSymptomIds: ['hard_stools', 'infrequent_bm', 'lower_heaviness'],
        ingredients: [
          {
            id: 'raisins_figs',
            name: { en: 'Black Raisins (Kismis) or 2 Dried Figs', te: 'నల్ల ఎండు ద్రాక్ష లేదా 2 అంజీర్ పండ్లు' },
            quantity: { en: '10–12 raisins soaked overnight', te: '10–12 రాత్రి నానబెట్టినవి' },
            alternative: {
              name: { en: 'Warm Water + 1/2 Lemon Juice (or 1 tsp Isabgol husk)', te: 'గోరువెచ్చని నీరు + నిమ్మరసం (లేదా ఇసబ్గోల్)' },
              quantity: { en: '1 glass warm water + juice of 1/2 lemon', te: '1 గ్లాసు గోరువెచ్చని నీరు + సగం నిమ్మరసం' },
              note: {
                en: 'Warm lemon water first thing in the morning stimulates natural bowel rhythm.',
                te: 'ఉదయాన్నే గోరువెచ్చని నిమ్మరసం నీరు తాగడం కూడా మలబద్ధకానికి బాగా పనిచేస్తుంది.',
              },
            },
          },
          {
            id: 'warm_water_const',
            name: { en: 'Warm Drinking Water', te: 'గోరువెచ్చని నీరు' },
            quantity: { en: '1 glass', te: '1 గ్లాసు' },
            alternative: {
              name: { en: 'Warm Milk + 1 tsp Ghee (at bedtime)', te: 'రాత్రి వేడి పాలల్లో 1 స్పూన్ నెయ్యి' },
              quantity: { en: '1 cup warm milk + 1 tsp ghee', te: '1 కప్పు వేడి పాలు + 1 స్పూన్ నెయ్యి' },
              note: {
                en: 'Ghee in warm milk acts as a gentle traditional lubricant if raisins are unavailable.',
                te: 'ఎండు ద్రాక్ష లేకపోతే రాత్రి పడుకునే ముందు వేడి పాలల్లో 1 స్పూన్ నెయ్యి కలిపి తాగవచ్చు.',
              },
            },
          },
        ],
        preparationSteps: [
          {
            en: 'Wash 10–12 black raisins (or 2 dried figs) and soak them in 1/2 cup of clean water overnight.',
            te: 'రాత్రి 10–12 నల్ల ఎండు ద్రాక్షను శుభ్రంగా కడిగి అర కప్పు నీటిలో నానబెట్టండి.',
          },
          {
            en: 'In the morning on an empty stomach, chew the soaked fruit well and drink the soaking water alongside 1 glass of warm water.',
            te: 'ఉదయం ఖాళీ కడుపుతో ఆ ద్రాక్షను బాగా నమిలి తిని, నానబెట్టిన నీటితో పాటు ఒక గ్లాసు గోరువెచ్చని నీరు తాగండి.',
          },
        ],
        usageInstructions: {
          en: 'Follow daily for 3–5 mornings alongside fresh vegetables, papaya, and 7–8 glasses of water throughout the day.',
          te: 'రోజంతా తగినంత నీరు, కూరగాయలు, బొప్పాయి తింటూ 3–5 రోజులు ఉదయం తీసుకోండి.',
        },
        precautions: [
          {
            en: 'People with diabetes should limit dried raisins/figs and prefer warm lemon water, soaked fenugreek, or plain leafy fiber.',
            te: 'షుగర్ ఉన్నవారు ఎండు ద్రాక్ష/అంజీర్ బదులు గోరువెచ్చని నిమ్మ నీరు లేదా ఆకుకూరల ఫైబర్ తీసుకోండి.',
          },
        ],
      },
    ],
    medicalRedFlags: [
      {
        en: 'Severe abdominal pain, vomiting, inability to pass gas, or blood in stools',
        te: 'తీవ్రమైన కడుపు నొప్పి, వాంతులు, గ్యాస్ కూడా వెళ్లకపోవడం లేదా మలంలో రక్తం',
      },
      {
        en: 'Constipation lasting longer than 2 weeks or sudden unexplained weight loss',
        te: '2 వారాలకు పైగా తగ్గని మలబద్ధకం లేదా కారణం లేకుండా బరువు తగ్గడం',
      },
    ],
  },
  {
    id: 'mild_diarrhea',
    pillar: 'digestive',
    name: { en: 'Mild Diarrhea / Loose Motions', te: 'తేలికపాటి విరేచనాలు' },
    shortDesc: {
      en: 'Gentle hydration, rice gruel (kanji), and roasted cumin buttermilk to prevent dehydration.',
      te: 'డీహైడ్రేషన్ రాకుండా గంజి, ఓఆర్ఎస్ మరియు జీలకర్ర మజ్జిగతో కడుపును తేలికగా ఉంచే సంరక్షణ.',
    },
    symptoms: [
      { id: 'loose_stool', label: { en: 'Frequent loose stools (mild)', te: 'తరచుగా నీళ్ల విరేచనాలు (తేలికపాటి)' } },
      { id: 'mild_cramp', label: { en: 'Mild stomach cramping', te: 'కడుపులో తేలికపాటి నొప్పి' } },
      { id: 'weakness_dia', label: { en: 'Feeling weak / thirsty', te: 'నీరసం & దాహం' } },
    ],
    remedies: [
      {
        id: 'diarrhea_rice_kanji',
        title: { en: 'Warm Rice Water (Kanji) with Roasted Cumin & Salt', te: 'వేయించిన జీలకర్ర & ఉప్పుతో అన్నం గంజి' },
        summary: {
          en: 'Gentle binding starch and fluids help calm the gut while replacing lost electrolytes.',
          te: 'నీరసాన్ని తగ్గించి, జీర్ణాశయానికి విశ్రాంతినిస్తూ విరేచనాలను తగ్గిస్తుంది.',
        },
        prepTimeMinutes: 10,
        reliefType: { en: 'Binding Hydration', te: 'కడుపును కట్టే పానీయం' },
        matchedSymptomIds: ['loose_stool', 'mild_cramp', 'weakness_dia'],
        ingredients: [
          {
            id: 'rice_kanji',
            name: { en: 'Plain Rice + Water (for Rice Gruel / Kanji)', te: 'బియ్యం గంజి (వండిన అన్నం నీరు)' },
            quantity: { en: '1 cup warm strained rice water', te: '1 కప్పు గోరువెచ్చని గంజి' },
            alternative: {
              name: { en: 'Ripe Mashed Banana + Pinch of Salt (or WHO ORS)', te: 'బాగా పండిన అరటిపండు లేదా WHO ORS' },
              quantity: { en: '1 mashed ripe banana', te: '1 పండిన అరటిపండు' },
              note: {
                en: 'Bananas supply potassium and soft soluble pectin that firms mild loose stools.',
                te: 'అరటిపండులో పొటాషియం మరియు పెక్టిన్ ఉండి విరేచనాలను తగ్గించడానికి సహాయపడతాయి.',
              },
            },
          },
          {
            id: 'cumin_dia',
            name: { en: 'Roasted Cumin Powder + Salt Pinch', te: 'వేయించిన జీలకర్ర పొడి + చిటికెడు ఉప్పు' },
            quantity: { en: '1/4 tsp cumin + 1/4 tsp salt', te: '1/4 స్పూన్ జీలకర్ర + 1/4 స్పూన్ ఉప్పు' },
            alternative: {
              name: { en: 'Thin Curd Rice (soft) or Pomegranate Peel Tea', te: 'పల్చటి పెరుగన్నం లేదా దానిమ్మ తొక్క నీరు' },
              quantity: { en: 'Small bowl soft curd rice', te: 'చిన్న కప్పు మెత్తని పెరుగన్నం' },
              note: {
                en: 'Keep meals ultra-simple—avoid spicy, oily, or heavy milk products.',
                te: 'కారం, నూనె మరియు పాల పదార్థాలను తాత్కాలికంగా పూర్తిగా మానేయండి.',
              },
            },
          },
        ],
        preparationSteps: [
          {
            en: 'Boil 2 tbsp washed white rice in 2.5 cups of water until very soft, then strain the thick cloudy rice water (kanji) into a cup.',
            te: '2 టేబుల్‌స్పూన్ల బియ్యాన్ని 2.5 కప్పుల నీటిలో మెత్తగా ఉడికించి, పై గంజిని కప్పులోకి వడపోయండి.',
          },
          {
            en: 'Stir in a pinch of salt and 1/4 tsp roasted cumin powder. Cool to lukewarm and sip slowly.',
            te: 'దానిలో చిటికెడు ఉప్పు, పావు స్పూన్ వేయించిన జీలకర్ర పొడి కలిపి గోరువెచ్చగా ఉన్నప్పుడు తాగండి.',
          },
        ],
        usageInstructions: {
          en: 'Sip 1/2 cup every 2 hours alongside WHO ORS packets if frequent.',
          te: 'ప్రతి 2 గంటలకు అర కప్పు తాగండి. విరేచనాలు ఎక్కువగా ఉంటే మెడికల్ షాప్ WHO ORS కూడా తాగండి.',
        },
        precautions: [
          {
            en: 'For infants, elderly people, or frequent watery diarrhea (>4–5 times/day), always prioritize WHO ORS and medical advice.',
            te: 'చిన్న పిల్లలు, వృద్ధులు లేదా రోజుకు 4–5 సార్లకు మించి విరేచనాలు అయితే వెంటనే WHO ORS ఇచ్చి డాక్టర్‌ను కలవండి.',
          },
        ],
      },
    ],
    medicalRedFlags: [
      {
        en: 'Blood or mucus in stool, high fever, or severe stomach cramps',
        te: 'మలంలో రక్తం లేదా జిగురు రావడం, అధిక జ్వరం లేదా తీవ్రమైన కడుపు నొప్పి',
      },
      {
        en: 'Signs of dehydration (dry tongue, sunken eyes, dizziness, no urine for 6+ hours)',
        te: 'డీహైడ్రేషన్ లక్షణాలు (నాలుక ఎండిపోవడం, కళ్ళు లోతుకు పోవడం, 6 గంటలు మూత్రం రాకపోవడం)',
      },
    ],
  },
  {
    id: 'muscle_cramps',
    pillar: 'pain_skin',
    name: { en: 'Muscle Cramps & Body Ache', te: 'కండరాల నొప్పి & ఒళ్ళు నొప్పులు' },
    shortDesc: {
      en: 'Warm oil rubbing, saltwater foot/calf soaks, and gentle stretching for tired muscles.',
      te: 'కండరాల పట్టేయడం మరియు అలసట నొప్పులకు వెచ్చని నూనె మర్దన & ఉప్పు నీటి కాపడం.',
    },
    symptoms: [
      { id: 'calf_cramp', label: { en: 'Calf or foot cramp', te: 'పిక్కలు లేదా పాదాలు పట్టేయడం' } },
      { id: 'shoulder_ache', label: { en: 'Neck / shoulder muscle tightness', te: 'మెడ / భుజాల కండరాల నొప్పి' } },
      { id: 'tired_legs', label: { en: 'Tired aching legs after work', te: 'పని తర్వాత కాళ్ల నొప్పులు' } },
    ],
    remedies: [
      {
        id: 'cramp_warm_soak',
        title: { en: 'Warm Rock Salt Soak & Gentle Sesame Oil Rub', te: 'గోరువెచ్చని రాళ్ళ ఉప్పు నీటిలో పాదాలు & నూనె మర్దన' },
        summary: {
          en: 'Relaxes tight muscle fibers and improves evening recovery.',
          te: 'బిగుసుకుపోయిన కండరాలను సడలించి అలసటను, నొప్పిని తగ్గిస్తుంది.',
        },
        prepTimeMinutes: 10,
        reliefType: { en: 'Muscle Relaxation', te: 'కండరాల విశ్రాంతి' },
        matchedSymptomIds: ['calf_cramp', 'shoulder_ache', 'tired_legs'],
        ingredients: [
          {
            id: 'epsom_salt',
            name: { en: 'Rock Salt or Epsom Salt in Warm Water', te: 'గోరువెచ్చని నీటిలో రాళ్ళ ఉప్పు లేదా ఎప్సమ్ సాల్ట్' },
            quantity: { en: '2 tablespoons in a bucket/bowl of warm water', te: '2 టేబుల్‌స్పూన్లు (బకెట్ నీటిలో)' },
            alternative: {
              name: { en: 'Warm Damp Towel Wrap', te: 'గోరువెచ్చని తడి టవల్ కాపడం' },
              quantity: { en: '10 minutes on tight muscle', te: '10 నిమిషాలు' },
              note: {
                en: 'A warm towel compress works well for shoulder or back muscles.',
                te: 'భుజాలు లేదా వీపు కండరాలకు గోరువెచ్చని టవల్ కాపడం సులభంగా ఉంటుంది.',
              },
            },
          },
          {
            id: 'sesame_oil',
            name: { en: 'Warm Sesame or Mustard Oil', te: 'గోరువెచ్చని నువ్వుల లేదా ఆవ నూనె' },
            quantity: { en: '1 tablespoon', te: '1 టేబుల్‌స్పూన్' },
            alternative: {
              name: { en: 'Coconut Oil', te: 'కొబ్బరి నూనె' },
              quantity: { en: '1 tablespoon', te: '1 టేబుల్‌స్పూన్' },
              note: {
                en: 'Gentle upward strokes toward the heart help tired legs feel lighter.',
                te: 'కింద నుండి పైకి మెల్లగా మర్దన చేయడం వల్ల కాళ్ల బరువు తగ్గుతుంది.',
              },
            },
          },
        ],
        preparationSteps: [
          {
            en: 'Gently stretch the cramped calf or shoulder muscle for 30 seconds without bouncing.',
            te: 'పట్టేసిన కండరాన్ని నెమ్మదిగా 30 సెకన్లు స్ట్రెచ్ చేయండి (బలవంతంగా లాగవద్దు).',
          },
          {
            en: 'Soak tired feet in warm saltwater for 10 minutes (or apply a warm towel compress for 10 minutes), pat dry, and rub lightly with warm oil.',
            te: 'గోరువెచ్చని ఉప్పు నీటిలో పాదాలను 10 నిమిషాలు ఉంచి, తుడిచి గోరువెచ్చని నూనెతో మెల్లగా రాయండి.',
          },
        ],
        usageInstructions: {
          en: 'Best done in the evening before rest, paired with a glass of water or lemon electrolyte drink.',
          te: 'రాత్రి పడుకునే ముందు చేసి, ఒక గ్లాసు నీరు లేదా నిమ్మ నీరు తాగండి.',
        },
        precautions: [
          {
            en: 'People with diabetes or nerve numbness in feet must test water temperature with their hand/wrist first so it is lukewarm, never hot.',
            te: 'షుగర్ లేదా పాదాల్లో స్పర్శ తగ్గిన వారు ముందుగా చేతితో వేడిని పరీక్షించి గోరువెచ్చని నీరు మాత్రమే వాడాలి.',
          },
        ],
      },
    ],
    medicalRedFlags: [
      {
        en: 'One-sided calf swelling, redness, and warmth (possible blood clot — do NOT massage!)',
        te: 'ఒక్క కాలు పిక్క మాత్రమే వాచి, ఎర్రగా, వేడిగా ఉండటం (అలాంటప్పుడు మర్దన చేయకండి, వెంటనే డాక్టర్‌ను కలవండి)',
      },
      {
        en: 'Muscle weakness, dark urine, or cramps following heavy chest pain',
        te: 'కండరాల శక్తి తగ్గిపోవడం, ముదురు రంగు మూత్రం లేదా ఛాతీ నొప్పితో కూడిన నొప్పులు',
      },
    ],
  },
  {
    id: 'sleeplessness',
    pillar: 'respiratory',
    name: { en: 'Mild Sleeplessness & Stress', te: 'తేలికపాటి నిద్రలేమి & ఒత్తిడి' },
    shortDesc: {
      en: 'Warm nutmeg-cardamom milk and calming herbal infusions for peaceful evening wind-down.',
      te: 'ప్రశాంతమైన నిద్ర కోసం గోరువెచ్చని జాజికాయ-యాలకుల పాలు మరియు తులసి టీ.',
    },
    symptoms: [
      { id: 'trouble_sleeping', label: { en: 'Difficulty falling asleep', te: 'నిద్ర పట్టడానికి ఇబ్బంది' } },
      { id: 'restless_mind', label: { en: 'Evening restlessness / mild stress', te: 'రాత్రిపూట ఆందోళన & మనసు ప్రశాంతంగా లేకపోవడం' } },
    ],
    remedies: [
      {
        id: 'sleep_nutmeg_milk',
        title: { en: 'Warm Milk with Cardamom & A Tiny Pinch of Nutmeg', te: 'యాలకులు & చిటికెడు జాజికాయ పొడితో గోరువెచ్చని పాలు' },
        summary: {
          en: 'Traditional soothing bedtime drink that calms the nervous system gently.',
          te: 'రాత్రిపూట నరాలను శాంతపరిచి ప్రశాంతమైన నిద్ర రావడానికి సహాయపడుతుంది.',
        },
        prepTimeMinutes: 5,
        reliefType: { en: 'Bedtime Soother', te: 'రాత్రి పానీయం' },
        matchedSymptomIds: ['trouble_sleeping', 'restless_mind'],
        ingredients: [
          {
            id: 'milk',
            name: { en: 'Warm Milk', te: 'గోరువెచ్చని పాలు' },
            quantity: { en: '1 cup', te: '1 కప్పు' },
            alternative: {
              name: { en: 'Warm Almond Milk or Tulsi-Chamomile Tea', te: 'బాదం పాలు లేదా తులసి కషాయం' },
              quantity: { en: '1 cup', te: '1 కప్పు' },
              note: {
                en: 'Herbal Tulsi or Mint tea is soothing if you prefer dairy-free nights.',
                te: 'పాలు పడని వారు గోరువెచ్చని తులసి లేదా పుదీనా కషాయం తాగవచ్చు.',
              },
            },
          },
          {
            id: 'cardamom_mint',
            name: { en: 'Crushed Cardamom + Tiny Pinch Nutmeg (Jaiphal)', te: 'దంచిన యాలక్కాయ + చిటికెడు జాజికాయ పొడి' },
            quantity: { en: '1 crushed cardamom + 1 tiny pinch nutmeg', te: '1 యాలక్కాయ + చాలా తక్కువ (చిటికెడు) జాజికాయ పొడి' },
            alternative: {
              name: { en: 'Turmeric Pinch + Cinnamon', te: 'చిటికెడు పసుపు + దాల్చినచెక్క' },
              quantity: { en: '1/4 tsp turmeric', te: '1/4 స్పూన్ పసుపు' },
              note: {
                en: 'Never exceed a tiny pinch of nutmeg; small culinary amounts are sufficient.',
                te: 'జాజికాయ పొడి కేవలం ఒక్క చిటికెడు మాత్రమే వేయాలి, ఎక్కువ వేయకూడదు.',
              },
            },
          },
        ],
        preparationSteps: [
          {
            en: 'Warm 1 cup of milk in a saucepan with 1 crushed cardamom pod for 3 minutes.',
            te: 'గిన్నెలో 1 కప్పు పాలలో దంచిన యాలక్కాయ వేసి 3 నిమిషాలు గోరువెచ్చగా కాగనివ్వండి.',
          },
          {
            en: 'Pour into a mug, stir in a tiny pinch (1/8 tsp) of nutmeg powder, and sip 30 minutes before bed without screens.',
            te: 'కప్పులో పోసి చాలా తక్కువ చిటికెడు జాజికాయ పొడి కలిపి, ఫోన్/టీవీలకు దూరంగా ఉండి పడుకోవడానికి అరగంట ముందు తాగండి.',
          },
        ],
        usageInstructions: {
          en: 'Drink 30–45 minutes before bedtime; dim lights and take 5 slow breaths.',
          te: 'పడుకునే 30–45 నిమిషాల ముందు తాగి, లైట్లు తగ్గించి ప్రశాంతంగా విశ్రాంతి తీసుకోండి.',
        },
        precautions: [
          {
            en: 'Use only a tiny culinary pinch of nutmeg (never large spoonfuls). Avoid caffeine after 3 PM.',
            te: 'జాజికాయ చాలా కొద్దిగా చిటికెడు మాత్రమే వాడాలి. మధ్యాహ్నం 3 తర్వాత టీ/కాఫీలు తగ్గించండి.',
          },
        ],
      },
    ],
    medicalRedFlags: [
      {
        en: 'Insomnia lasting more than 3–4 weeks, severe anxiety/low mood, or loud gasping/snoring during sleep',
        te: '3–4 వారాలకు పైగా నిద్ర పట్టకపోవడం, తీవ్రమైన ఆందోళన/డిప్రెషన్ లేదా నిద్రలో శ్వాస ఆగిపోవడం',
      },
    ],
  },
  {
    id: 'mouth_ulcers',
    pillar: 'digestive',
    name: { en: 'Mouth Ulcers (Canker Sores)', te: 'నోటి పుండ్లు (బొబ్బలు)' },
    shortDesc: {
      en: 'Cooling baking-soda/salt rinses, ghee, and honey dabs to soothe tender mouth sores.',
      te: 'నోటి పుండ్ల మంటను తగ్గించే బేకింగ్ సోడా పుక్కిలింత, నెయ్యి మరియు తేనె చిట్కాలు.',
    },
    symptoms: [
      { id: 'cheek_sore', label: { en: 'Stinging spot on cheek/tongue', te: 'నాలుక లేదా బుగ్గ లోపల మంట/పుండు' } },
      { id: 'spice_burn', label: { en: 'Pain while eating spicy food', te: 'ఆహారం తినేటప్పుడు మంట' } },
    ],
    remedies: [
      {
        id: 'ulcer_ghee_honey',
        title: { en: 'Gentle Baking Soda Rinse & Pure Ghee/Honey Dab', te: 'వంట సోడా నీటి పుక్కిలింత & నెయ్యి/తేనె పూత' },
        summary: {
          en: 'Neutralizes mouth acidity and forms a soothing protective coat over small ulcers.',
          te: 'నోటిలోని ఆమ్లతను తగ్గించి, పుండుపై రక్షణ పొరలా ఏర్పడి త్వరగా మానేలా చేస్తుంది.',
        },
        prepTimeMinutes: 3,
        reliefType: { en: 'Oral Soother', te: 'నోటి పూత & పుక్కిలింత' },
        matchedSymptomIds: ['cheek_sore', 'spice_burn'],
        ingredients: [
          {
            id: 'warm_water',
            name: { en: 'Lukewarm Water + Pinch of Baking Soda', te: 'గోరువెచ్చని నీరు + చిటికెడు వంట సోడా' },
            quantity: { en: '1/2 glass water + 1/4 tsp baking soda', te: 'అర గ్లాసు నీరు + 1/4 స్పూన్ వంట సోడా' },
            alternative: {
              name: { en: 'Plain Lukewarm Saltwater (very mild)', te: 'తేలికపాటి గోరువెచ్చని ఉప్పు నీరు' },
              quantity: { en: '1/2 glass water + 1/4 tsp salt', te: 'అర గ్లాసు నీరు + 1/4 స్పూన్ ఉప్పు' },
              note: {
                en: 'Baking soda is gentler and stings less than salt on open mouth ulcers.',
                te: 'పుండ్లపై ఉప్పు మంటగా అనిపిస్తే వంట సోడా నీరు ఎంతో మృదువుగా ఉంటుంది.',
              },
            },
          },
          {
            id: 'honey',
            name: { en: 'Pure Ghee or Raw Honey', te: 'స్వచ్ఛమైన నెయ్యి లేదా తేనె' },
            quantity: { en: '1/4 teaspoon applied gently', te: 'పావు స్పూన్ పుండుపై రాయడానికి' },
            alternative: {
              name: { en: 'Virgin Coconut Oil or Fresh Curd', te: 'కొబ్బరి నూనె లేదా తాజా పెరుగు' },
              quantity: { en: 'Small dab', te: 'కొద్దిగా పూత' },
              note: {
                en: 'Coconut oil and ghee coat ulcers soothingly without stinging.',
                te: 'తేనె లేకపోతే స్వచ్ఛమైన నెయ్యి లేదా కొబ్బరి నూనె రాయడం కూడా వెంటనే మంట తగ్గిస్తుంది.',
              },
            },
          },
        ],
        preparationSteps: [
          {
            en: 'Dissolve 1/4 tsp baking soda in 1/2 glass of lukewarm water, swish gently for 20 seconds, and spit out.',
            te: 'అర గ్లాసు గోరువెచ్చని నీటిలో పావు స్పూన్ వంట సోడా కలిపి, నోట్లో 20 సెకన్లు పుక్కిలించి ఉమ్మేయండి.',
          },
          {
            en: 'With clean fingers, gently dab a small drop of pure ghee or honey onto the sore before meals or bedtime.',
            te: 'శుభ్రమైన వేలితో కొద్దిగా నెయ్యి లేదా తేనెను పుండుపై మెల్లగా రాయండి.',
          },
        ],
        usageInstructions: {
          en: 'Rinse 2–3 times daily and eat soft, cool, non-spicy foods like curd rice until healed.',
          te: 'రోజుకు 2–3 సార్లు పుక్కిలించండి. పుండు తగ్గే వరకు కారం లేని మెత్తని పెరుగన్నం వంటి ఆహారం తీసుకోండి.',
        },
        precautions: [
          {
            en: 'Do not swallow baking soda rinse water. Avoid honey for infants under 1 year.',
            te: 'పుక్కిలించిన నీటిని మింగకండి. 1 సంవత్సరం లోపు పిల్లలకు తేనె వాడకండి.',
          },
        ],
      },
    ],
    medicalRedFlags: [
      {
        en: 'Mouth ulcer lasting longer than 2 weeks without healing, or unusually large/spreading sores',
        te: '2 వారాలకు పైగా మానని నోటి పుండు, లేదా పెద్దదిగా పెరుగుతున్న పుండ్లు',
      },
      {
        en: 'Ulcers accompanied by high fever, rash, or difficulty swallowing',
        te: 'జ్వరం, శరీరంపై దద్దుర్లు లేదా మింగలేని పరిస్థితితో కూడిన నోటి పుండ్లు',
      },
    ],
  },
  {
    id: 'dry_skin_heels',
    pillar: 'pain_skin',
    name: { en: 'Dry Skin & Cracked Heels', te: 'పొడి చర్మం & పగిలిన మడమలు' },
    shortDesc: {
      en: 'Lukewarm foot soaks and simple coconut oil / ghee moisture sealing before sleep.',
      te: 'గోరువెచ్చని నీటిలో పాదాలు నానబెట్టి కొబ్బరి నూనె లేదా నెయ్యి రాసే సులభమైన సంరక్షణ.',
    },
    symptoms: [
      { id: 'rough_heels', label: { en: 'Dry, rough, cracked heels', te: 'పొడిబారి పగిలిన మడమలు' } },
      { id: 'flaky_skin', label: { en: 'Seasonal dry skin on hands/legs', te: 'చలికాలంలో చర్మం పొడిబారడం' } },
    ],
    remedies: [
      {
        id: 'skin_coconut_soak',
        title: { en: 'Lukewarm Soak + Coconut Oil / Ghee Overnight Lock', te: 'గోరువెచ్చని నీటి శుభ్రత & కొబ్బరి నూనె/నెయ్యి పూత' },
        summary: {
          en: 'Softens dry calloused skin and locks in moisture overnight with cotton socks.',
          te: 'మడమల పగుళ్లను మృదువుగా చేసి రాత్రిపూట తేమను నిలిపి ఉంచుతుంది.',
        },
        prepTimeMinutes: 10,
        reliefType: { en: 'Moisture Care', te: 'చర్మ తేమ సంరక్షణ' },
        matchedSymptomIds: ['rough_heels', 'flaky_skin'],
        ingredients: [
          {
            id: 'warm_water',
            name: { en: 'Lukewarm Water Basin', te: 'గోరువెచ్చని నీరు' },
            quantity: { en: 'Soak for 10 minutes', te: '10 నిమిషాలు నానబెట్టడానికి' },
            alternative: {
              name: { en: 'Damp Skin Right After Bath', te: 'స్నానం చేసిన వెంటనే తడి చర్మంపై' },
              quantity: { en: 'Apply within 3 minutes of drying', te: 'తుడుచుకున్న వెంటనే' },
              note: {
                en: 'Applying oil onto slightly damp skin traps natural hydration effectively.',
                te: 'స్నానం తర్వాత కొద్దిగా తడి ఉన్నప్పుడే నూనె రాయడం వల్ల తేమ లోపల నిలిచి ఉంటుంది.',
              },
            },
          },
          {
            id: 'ghee',
            name: { en: 'Virgin Coconut Oil or Pure Ghee', te: 'కొబ్బరి నూనె లేదా స్వచ్ఛమైన నెయ్యి' },
            quantity: { en: '1 teaspoon', te: '1 టీస్పూన్' },
            alternative: {
              name: { en: 'Sesame Oil or Fresh Aloe Gel + Oil', te: 'నువ్వుల నూనె లేదా కలబంద + నూనె' },
              quantity: { en: '1 teaspoon', te: '1 టీస్పూన్' },
              note: {
                en: 'Wear clean cotton socks over oiled heels before sleeping.',
                te: 'నూనె రాసిన తర్వాత శుభ్రమైన కాటన్ సాక్స్ వేసుకుని పడుకుంటే త్వరగా మృదువుగా అవుతాయి.',
              },
            },
          },
        ],
        preparationSteps: [
          {
            en: 'Soak feet in lukewarm water for 10 minutes (avoid harsh scrubbing or blades) and pat gently dry.',
            te: 'గోరువెచ్చని నీటిలో పాదాలను 10 నిమిషాలు ఉంచి, బ్లేడ్లు లేదా గట్టిగా రుద్దకుండా మెత్తగా తుడవండి.',
          },
          {
            en: 'Massage 1 tsp coconut oil or ghee onto damp heels/dry skin and slip on clean cotton socks overnight.',
            te: 'తడి ఆరకముందే కొబ్బరి నూనె లేదా నెయ్యిని మడమలకు రాసి శుభ్రమైన కాటన్ సాక్స్ వేసుకోండి.',
          },
        ],
        usageInstructions: {
          en: 'Repeat nightly for 5–7 days; wear supportive cushioned footwear indoors.',
          te: 'వరుసగా 5–7 రాత్రులు చేయండి; ఇంట్లో కూడా మెత్తని చెప్పులు వాడండి.',
        },
        precautions: [
          {
            en: 'If you have diabetes, NEVER soak feet in hot water or scrape heels—inspect daily and consult a doctor for deep cracks.',
            te: 'షుగర్ ఉన్నవారు ఎప్పుడూ వేడి నీటిలో పాదాలు నానబెట్టకండి లేదా పగుళ్లను గీకకండి; లోతైన పగుళ్లకు డాక్టర్‌ను కలవండి.',
          },
        ],
      },
    ],
    medicalRedFlags: [
      {
        en: 'Deep bleeding heel cracks, pus, spreading redness, or any foot sore in someone with diabetes',
        te: 'రక్తం కారే లోతైన పగుళ్లు, చీము, ఎరుపు లేదా షుగర్ ఉన్నవారికి పాదాలపై గాయాలు',
      },
    ],
  },
];

export const PANTRY_SWAPS: PantrySwapEntry[] = [
  {
    id: 'swap_tulsi',
    original: { en: 'Fresh Tulsi (Holy Basil)', te: 'తాజా తులసి ఆకులు' },
    substitute: { en: 'Mint leaves or Dried Oregano / Ajwain leaf', te: 'పుదీనా ఆకులు లేదా వాము ఆకు' },
    ratio: { en: '1:1 leaves (or 1/2 tsp dried)', te: 'సమాన సంఖ్యలో ఆకులు (లేదా 1/2 స్పూన్ పొడి)' },
    bestFor: { en: 'Cold teas, nasal steam, mild fever decoctions', te: 'జలుబు కషాయాలు, ఆవిరి మరియు తేలికపాటి జ్వరం' },
  },
  {
    id: 'swap_honey',
    original: { en: 'Raw Honey', te: 'స్వచ్ఛమైన తేనె' },
    substitute: { en: 'Organic Jaggery (Bellam) or Date Syrup', te: 'బెల్లం తురుము లేదా ఖర్జూర రసం' },
    ratio: { en: '1 tsp grated jaggery per 1 tsp honey', te: '1 స్పూన్ తేనెకు 1 స్పూన్ బెల్లం' },
    bestFor: { en: 'Cough & cold infusions (safe for toddlers 1+ yr)', te: 'దగ్గు మరియు జలుబు కషాయాలు (1 ఏడాది పైబడిన పిల్లలకూ సురక్షితం)' },
    caution: { en: 'Never give honey to babies under 1 year', te: '1 ఏడాది లోపు శిశువులకు తేనె ఇవ్వకండి' },
  },
  {
    id: 'swap_ginger',
    original: { en: 'Fresh Ginger Root', te: 'తాజా అల్లం' },
    substitute: { en: 'Dry Ginger Powder (Sonth / Sonti)', te: 'సొంఠి పొడి' },
    ratio: { en: '1/4 tsp powder = 1-inch fresh ginger', te: '1 అంగుళం అల్లానికి 1/4 టీస్పూన్ సొంఠి పొడి' },
    bestFor: { en: 'Kadha, throat infusions, indigestion teas', te: 'కషాయాలు, గొంతు నొప్పి మరియు అజీర్ణ టీ' },
  },
  {
    id: 'swap_ajwain',
    original: { en: 'Ajwain (Carom Seeds)', te: 'వాము గింజలు' },
    substitute: { en: 'Fennel Seeds (Saunf) or Cumin (Jeera)', te: 'సోంపు లేదా జీలకర్ర' },
    ratio: { en: '1 tsp fennel/cumin per 1/2 tsp ajwain', te: 'అర స్పూన్ వాముకు 1 స్పూన్ సోంపు/జీలకర్ర' },
    bestFor: { en: 'Gas, bloating, and steam inhalation', te: 'గ్యాస్, కడుపు ఉబ్బరం మరియు ఆవిరి' },
  },
  {
    id: 'swap_sesame',
    original: { en: 'Cold-Pressed Sesame Oil', te: 'నువ్వుల నూనె' },
    substitute: { en: 'Mustard Oil (warming) or Coconut Oil (gentle)', te: 'ఆవ నూనె (వెచ్చదనం) లేదా కొబ్బరి నూనె' },
    ratio: { en: '1:1 tablespoon', te: 'సమాన పరిమాణం' },
    bestFor: { en: 'Warm knee & joint massage', te: 'మోకాళ్ల & కీళ్ల మర్దన' },
  },
  {
    id: 'swap_epsom',
    original: { en: 'Epsom Salt', te: 'ఎప్సమ్ సాల్ట్' },
    substitute: { en: 'Rock Salt (Sendha Namak / Kallu Uppu)', te: 'రాళ్ళ ఉప్పు / సైంధవ లవణం' },
    ratio: { en: '2 tbsp rock salt in warm water bowl', te: 'గోరువెచ్చని నీటిలో 2 టేబుల్‌స్పూన్లు' },
    bestFor: { en: 'Warm soothing joint & foot compresses', te: 'కీళ్ల మరియు పాదాల వెచ్చని కాపడం' },
  },
  {
    id: 'swap_curd',
    original: { en: 'Fresh Curd (Buttermilk)', te: 'తాజా పెరుగు (మజ్జిగ)' },
    substitute: { en: 'Cold Milk or Soaked Fennel Water', te: 'చల్లని పాలు లేదా సోంపు నానబెట్టిన నీరు' },
    ratio: { en: '1 cup fennel water or 1/2 cup cold milk', te: '1 కప్పు సోంపు నీరు లేదా అర కప్పు పాలు' },
    bestFor: { en: 'Acidity & sour heartburn relief', te: 'ఎసిడిటీ మరియు ఛాతీ మంట ఉపశమనం' },
  },
  {
    id: 'swap_sabja',
    original: { en: 'Sabja (Sweet Basil) Seeds', te: 'సబ్జా గింజలు' },
    substitute: { en: 'Soaked Chia Seeds or Barley Water', te: 'నానబెట్టిన చియా గింజలు లేదా బార్లీ నీరు' },
    ratio: { en: '1 tsp soaked 15 min in water', te: '15 నిమిషాలు నానబెట్టిన 1 టీస్పూన్' },
    bestFor: { en: 'Summer heat & mild dehydration', te: 'వేసవి తాపం మరియు నీరసం' },
  },
];
