import { BilingualText } from '../types/remedy';

export interface PantryOption {
  id: string;
  label: BilingualText;
  isStaple?: boolean;
}

export const PANTRY_OPTIONS: PantryOption[] = [
  { id: 'water', label: { en: 'Warm / Clean Water', te: 'గోరువెచ్చని / శుభ్రమైన నీరు' }, isStaple: true },
  { id: 'salt', label: { en: 'Salt / Rock Salt', te: 'ఉప్పు / రాళ్ళ ఉప్పు' }, isStaple: true },
  { id: 'ginger', label: { en: 'Fresh Ginger', te: 'తాజా అల్లం' }, isStaple: true },
  { id: 'dry_ginger', label: { en: 'Dry Ginger Powder (Sonth)', te: 'సొంఠి పొడి' } },
  { id: 'turmeric', label: { en: 'Turmeric Powder', te: 'పసుపు' }, isStaple: true },
  { id: 'tulsi', label: { en: 'Tulsi Leaves', te: 'తులసి ఆకులు' } },
  { id: 'mint', label: { en: 'Mint Leaves', te: 'పుదీనా ఆకులు' } },
  { id: 'honey', label: { en: 'Raw Honey', te: 'తేనె' } },
  { id: 'jaggery', label: { en: 'Jaggery / Sugar', te: 'బెల్లం / చక్కెర' }, isStaple: true },
  { id: 'black_pepper', label: { en: 'Black Pepper', te: 'నల్ల మిరియాలు' }, isStaple: true },
  { id: 'ajwain', label: { en: 'Ajwain (Carom Seeds)', te: 'వాము' } },
  { id: 'cumin', label: { en: 'Cumin Seeds (Jeera)', te: 'జీలకర్ర' }, isStaple: true },
  { id: 'fennel', label: { en: 'Fennel Seeds (Saunf)', te: 'సోంపు' } },
  { id: 'coriander', label: { en: 'Coriander Seeds (Dhaniya)', te: 'ధనియాలు' } },
  { id: 'lemon', label: { en: 'Lemon', te: 'నిమ్మకాయ' } },
  { id: 'milk', label: { en: 'Milk', te: 'పాలు' } },
  { id: 'curd', label: { en: 'Plain Yogurt / Curd', te: 'తాజా పెరుగు' } },
  { id: 'ghee', label: { en: 'Ghee / Coconut Oil', te: 'నెయ్యి / కొబ్బరి నూనె' } },
  { id: 'sesame_oil', label: { en: 'Sesame / Mustard Oil', te: 'నువ్వుల / ఆవ నూనె' } },
  { id: 'garlic', label: { en: 'Garlic', te: 'వెల్లుల్లి' } },
  { id: 'clove', label: { en: 'Cloves (Lavang)', te: 'లవంగాలు' } },
  { id: 'cardamom', label: { en: 'Cardamom / Cinnamon', te: 'యాలకులు / దాల్చినచెక్క' } },
  { id: 'fenugreek', label: { en: 'Fenugreek Seeds (Methi)', te: 'మెంతులు' } },
  { id: 'aloe', label: { en: 'Fresh Aloe Vera', te: 'కలబంద' } },
  { id: 'guava_leaf', label: { en: 'Guava Leaves', te: 'జామ ఆకులు' } },
  { id: 'sabja', label: { en: 'Sabja / Chia Seeds', te: 'సబ్జా / చియా గింజలు' } },
  { id: 'towel', label: { en: 'Clean Cotton Cloth / Towel', te: 'శుభ్రమైన కాటన్ వస్త్రం' }, isStaple: true },
];

/**
 * Maps each remedy ingredient.id from remedies.ts to its primary pantry option IDs
 * and valid alternative pantry option IDs.
 */
export const INGREDIENT_PANTRY_MAP: Record<
  string,
  { primary: string[]; alternatives: string[] }
> = {
  tulsi: { primary: ['tulsi'], alternatives: ['mint'] },
  ginger: { primary: ['ginger'], alternatives: ['dry_ginger'] },
  pepper: { primary: ['black_pepper'], alternatives: ['cardamom'] },
  honey: { primary: ['honey'], alternatives: ['jaggery'] },
  ajwain: { primary: ['ajwain'], alternatives: ['cumin', 'mint'] },
  eucalyptus: { primary: ['water'], alternatives: ['turmeric', 'tulsi'] },
  ginger_juice: { primary: ['ginger'], alternatives: ['dry_ginger'] },
  raw_honey: { primary: ['honey'], alternatives: ['jaggery'] },
  pepper_pinch: { primary: ['black_pepper'], alternatives: ['turmeric'] },
  milk: { primary: ['milk'], alternatives: ['water'] },
  turmeric: { primary: ['turmeric'], alternatives: ['turmeric'] },
  ghee_pepper: { primary: ['ghee', 'black_pepper'], alternatives: ['cardamom'] },
  coriander_seeds: { primary: ['coriander'], alternatives: ['cumin'] },
  tulsi_fever: { primary: ['tulsi'], alternatives: ['mint', 'cardamom'] },
  ginger_fever: { primary: ['ginger'], alternatives: ['cardamom'] },
  lukewarm_water: { primary: ['water'], alternatives: ['water'] },
  cotton_cloth: { primary: ['towel'], alternatives: ['towel'] },
  warm_water: { primary: ['water'], alternatives: ['mint'] },
  salt: { primary: ['salt'], alternatives: ['salt'] },
  turmeric_gargle: { primary: ['turmeric'], alternatives: ['salt'] },
  methi: { primary: ['fenugreek'], alternatives: ['cardamom', 'honey'] },
  sesame_oil: { primary: ['sesame_oil'], alternatives: ['ghee'] },
  garlic_cloves: { primary: ['garlic'], alternatives: ['ginger', 'turmeric'] },
  epsom_salt: { primary: ['salt'], alternatives: ['water', 'towel'] },
  turmeric_paste: { primary: ['turmeric'], alternatives: ['aloe'] },
  ajwain_dig: { primary: ['ajwain'], alternatives: ['fennel', 'cumin'] },
  black_salt: { primary: ['salt'], alternatives: ['water'] },
  curd: { primary: ['curd'], alternatives: ['milk', 'fennel'] },
  cumin_mint: { primary: ['cumin', 'mint'], alternatives: ['coriander'] },
  jeera_saunf: { primary: ['cumin', 'fennel'], alternatives: ['coriander', 'mint'] },
  ginger_dig: { primary: ['ginger'], alternatives: ['cardamom'] },
  ginger_head: { primary: ['ginger'], alternatives: ['dry_ginger', 'lemon'] },
  cardamom_mint: { primary: ['cardamom', 'mint'], alternatives: ['tulsi'] },
  towel_water: { primary: ['towel', 'water'], alternatives: ['towel'] },
  mint_steam: { primary: ['mint'], alternatives: ['ajwain', 'clove'] },
  clove: { primary: ['clove'], alternatives: ['garlic', 'salt'] },
  guava_leaves: { primary: ['guava_leaf'], alternatives: ['turmeric', 'salt'] },
  cool_water: { primary: ['water'], alternatives: ['towel'] },
  aloe_gel: { primary: ['aloe'], alternatives: ['water'] },
  clean_water_wash: { primary: ['water'], alternatives: ['salt'] },
  honey_dressing: { primary: ['honey'], alternatives: ['ghee'] },
  clean_drinking_water: { primary: ['water'], alternatives: ['water'] },
  sugar_jaggery: { primary: ['jaggery'], alternatives: ['honey'] },
  salt_lemon: { primary: ['salt', 'lemon'], alternatives: ['salt'] },
  sabja: { primary: ['sabja'], alternatives: ['sabja'] },
  buttermilk_cool: { primary: ['curd'], alternatives: ['lemon', 'water'] },
  raisins_figs: { primary: ['jaggery'], alternatives: ['lemon', 'water'] },
  warm_water_const: { primary: ['water'], alternatives: ['milk', 'ghee'] },
  rice_kanji: { primary: ['water'], alternatives: ['curd'] },
  cumin_dia: { primary: ['cumin', 'salt'], alternatives: ['curd'] },
};
