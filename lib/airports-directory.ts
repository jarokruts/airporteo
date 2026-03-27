export interface Airport {
  city: string
  airport: string
  code: string
  country: string
  region: string
  slug: string
  price: number
}

export const AIRPORTS_DATA: Airport[] = [
  // ARGENTINA
  { city: 'Buenos Aires', airport: 'Aeroparque Jorge Newbery', code: 'AEP', country: 'Argentina', region: 'Americas', slug: 'buenos-aires-aep', price: 95 },
  { city: 'Buenos Aires', airport: 'Ministro Pistarini International', code: 'EZE', country: 'Argentina', region: 'Americas', slug: 'buenos-aires-eze', price: 95 },
  { city: 'Cordoba', airport: 'Cordoba Taravella', code: 'COR', country: 'Argentina', region: 'Americas', slug: 'cordoba-cor', price: 65 },
  { city: 'Mendoza', airport: 'El Plumerillo', code: 'MDZ', country: 'Argentina', region: 'Americas', slug: 'mendoza-mdz', price: 60 },
  { city: 'Rosario', airport: 'Islas Malvinas', code: 'ROS', country: 'Argentina', region: 'Americas', slug: 'rosario-ros', price: 60 },
  // ARMENIA
  { city: 'Yerevan', airport: 'Zvartnots', code: 'EVN', country: 'Armenia', region: 'Europe', slug: 'yerevan-evn', price: 85 },
  // ARUBA
  { city: 'Aruba', airport: 'Queen Beatrix', code: 'AUA', country: 'Aruba', region: 'Americas', slug: 'aruba-aua', price: 75 },
  // AUSTRALIA
  { city: 'Adelaide', airport: 'Adelaide', code: 'ADL', country: 'Australia', region: 'Oceania', slug: 'adelaide-adl', price: 145 },
  { city: 'Brisbane', airport: 'Brisbane', code: 'BNE', country: 'Australia', region: 'Oceania', slug: 'brisbane-bne', price: 135 },
  { city: 'Melbourne', airport: 'Melbourne', code: 'MEL', country: 'Australia', region: 'Oceania', slug: 'melbourne-mel', price: 140 },
  { city: 'Perth', airport: 'Perth', code: 'PER', country: 'Australia', region: 'Oceania', slug: 'perth-per', price: 155 },
  { city: 'Sydney', airport: 'Kingsford Smith', code: 'SYD', country: 'Australia', region: 'Oceania', slug: 'sydney-syd', price: 165 },
  // AUSTRIA
  { city: 'Vienna', airport: 'Vienna International', code: 'VIE', country: 'Austria', region: 'Europe', slug: 'vienna-vie', price: 105 },
  // AZERBAIJAN
  { city: 'Baku', airport: 'Heydar Aliyev', code: 'GYD', country: 'Azerbaijan', region: 'Europe', slug: 'baku-gyd', price: 90 },
  // BAHRAIN
  { city: 'Bahrain', airport: 'Bahrain International', code: 'BAH', country: 'Bahrain', region: 'Middle East', slug: 'bahrain-bah', price: 130 },
  // BANGLADESH
  { city: 'Dhaka', airport: 'Hazrat Shahjalal', code: 'DAC', country: 'Bangladesh', region: 'Asia', slug: 'dhaka-dac', price: 110 },
  // BARBADOS
  { city: 'Barbados', airport: 'Barbados International', code: 'BGI', country: 'Barbados', region: 'Americas', slug: 'barbados-bgi', price: 120 },
  // BELGIUM
  { city: 'Brussels', airport: 'Brussels-Zaventem', code: 'BRU', country: 'Belgium', region: 'Europe', slug: 'brussels-bru', price: 85 },
  // BOSNIA & HERZEGOVINA
  { city: 'Sarajevo', airport: 'Sarajevo International', code: 'SJJ', country: 'Bosnia & Herzegovina', region: 'Europe', slug: 'sarajevo-sjj', price: 75 },
  // BRAZIL
  { city: 'Belém', airport: 'Júlio Cezar Ribeiro', code: 'BEL', country: 'Brazil', region: 'Americas', slug: 'belem-bel', price: 125 },
  { city: 'Brasília', airport: 'Brasília', code: 'BSB', country: 'Brazil', region: 'Americas', slug: 'brasilia-bsb', price: 110 },
  { city: 'Cuiabá', airport: 'Marechal Rondon', code: 'CGB', country: 'Brazil', region: 'Americas', slug: 'cuiaba-cgb', price: 105 },
  { city: 'Curitiba', airport: 'Afonso Pena', code: 'CWB', country: 'Brazil', region: 'Americas', slug: 'curitiba-cwb', price: 100 },
  { city: 'Florianópolis', airport: 'Hercílio Luz', code: 'FLN', country: 'Brazil', region: 'Americas', slug: 'florianopolis-fln', price: 105 },
  { city: 'Fortaleza', airport: 'Pinto Martins', code: 'FOR', country: 'Brazil', region: 'Americas', slug: 'fortaleza-for', price: 110 },
  { city: 'Foz do Iguaçu', airport: 'Foz do Iguaçu', code: 'IGU', country: 'Brazil', region: 'Americas', slug: 'foz-do-iguazu-igu', price: 115 },
  { city: 'Londrina', airport: 'José Richa', code: 'LDB', country: 'Brazil', region: 'Americas', slug: 'londrina-ldb', price: 95 },
  { city: 'Manaus', airport: 'Eduardo Gomes', code: 'MAO', country: 'Brazil', region: 'Americas', slug: 'manaus-mao', price: 120 },
  { city: 'São Luís', airport: 'Marechal Cunha Machado', code: 'SLZ', country: 'Brazil', region: 'Americas', slug: 'sao-luis-slz', price: 110 },
  { city: 'Porto Alegre', airport: 'Salgado Filho', code: 'POA', country: 'Brazil', region: 'Americas', slug: 'porto-alegre-poa', price: 105 },
  { city: 'Porto Seguro', airport: 'Porto Seguro', code: 'BPS', country: 'Brazil', region: 'Americas', slug: 'porto-seguro-bps', price: 100 },
  { city: 'Recife', airport: 'Gilberto Freyre', code: 'REC', country: 'Brazil', region: 'Americas', slug: 'recife-rec', price: 105 },
  { city: 'Rio de Janeiro', airport: 'Galeão', code: 'GIG', country: 'Brazil', region: 'Americas', slug: 'rio-de-janeiro-gig', price: 130 },
  { city: 'Rio de Janeiro', airport: 'Santos Dumont', code: 'SDU', country: 'Brazil', region: 'Americas', slug: 'rio-de-janeiro-sdu', price: 125 },
  { city: 'Salvador', airport: 'Bahia', code: 'SSA', country: 'Brazil', region: 'Americas', slug: 'salvador-ssa', price: 105 },
  { city: 'Goiânia', airport: 'Santa Genoveva', code: 'GYN', country: 'Brazil', region: 'Americas', slug: 'goiania-gyn', price: 95 },
  { city: 'São Paulo', airport: 'Guarulhos', code: 'GRU', country: 'Brazil', region: 'Americas', slug: 'sao-paulo-gru', price: 135 },
  { city: 'Campinas', airport: 'Viracopos', code: 'VCP', country: 'Brazil', region: 'Americas', slug: 'campinas-vcp', price: 120 },
  // BULGARIA
  { city: 'Burgas', airport: 'Burgas', code: 'BOJ', country: 'Bulgaria', region: 'Europe', slug: 'burgas-boj', price: 65 },
  { city: 'Sofia', airport: 'Sofia', code: 'SOF', country: 'Bulgaria', region: 'Europe', slug: 'sofia-sof', price: 70 },
  { city: 'Varna', airport: 'Varna', code: 'VAR', country: 'Bulgaria', region: 'Europe', slug: 'varna-var', price: 65 },
  // CANADA
  { city: 'Calgary', airport: 'Calgary', code: 'YYC', country: 'Canada', region: 'Americas', slug: 'calgary-yyc', price: 125 },
  { city: 'Montreal', airport: 'Trudeau', code: 'YUL', country: 'Canada', region: 'Americas', slug: 'montreal-yul', price: 115 },
  { city: 'Ottawa', airport: 'Macdonald-Cartier', code: 'YOW', country: 'Canada', region: 'Americas', slug: 'ottawa-yow', price: 105 },
  { city: 'Toronto', airport: 'Pearson', code: 'YYZ', country: 'Canada', region: 'Americas', slug: 'toronto-yyz', price: 120 },
  { city: 'Vancouver', airport: 'Vancouver', code: 'YVR', country: 'Canada', region: 'Americas', slug: 'vancouver-yvr', price: 130 },
  // CHILE
  { city: 'Santiago', airport: 'Santiago de Chile', code: 'SCL', country: 'Chile', region: 'Americas', slug: 'santiago-scl', price: 155 },
  // CHINA
  { city: 'Beijing', airport: 'Beijing Capital', code: 'PEK', country: 'China', region: 'Asia', slug: 'beijing-pek', price: 165 },
  { city: 'Beijing', airport: 'Beijing Daxing', code: 'PKX', country: 'China', region: 'Asia', slug: 'beijing-pkx', price: 165 },
  { city: 'Guangzhou', airport: 'Guangzhou Baiyun', code: 'CAN', country: 'China', region: 'Asia', slug: 'guangzhou-can', price: 145 },
  { city: 'Shanghai', airport: 'Shanghai Hongqiao', code: 'SHA', country: 'China', region: 'Asia', slug: 'shanghai-sha', price: 155 },
  { city: 'Shanghai', airport: 'Shanghai Pudong', code: 'PVG', country: 'China', region: 'Asia', slug: 'shanghai-pvg', price: 160 },
  // COLOMBIA
  { city: 'Bogotá', airport: 'El Dorado', code: 'BOG', country: 'Colombia', region: 'Americas', slug: 'bogota-bog', price: 105 },
  { city: 'Cali', airport: 'Alfonso Bonilla Aragón', code: 'CLO', country: 'Colombia', region: 'Americas', slug: 'cali-clo', price: 95 },
  { city: 'Cartagena', airport: 'Rafael Núñez', code: 'CTG', country: 'Colombia', region: 'Americas', slug: 'cartagena-ctg', price: 100 },
  { city: 'Medellín', airport: 'José María Córdova', code: 'MDE', country: 'Colombia', region: 'Americas', slug: 'medellin-mde', price: 100 },
  // COSTA RICA
  { city: 'San José', airport: 'Juan Santamaría', code: 'SJO', country: 'Costa Rica', region: 'Americas', slug: 'san-jose-sjo', price: 90 },
  // CROATIA
  { city: 'Dubrovnik', airport: 'Dubrovnik', code: 'DBV', country: 'Croatia', region: 'Europe', slug: 'dubrovnik-dbv', price: 80 },
  { city: 'Zagreb', airport: 'Franjo Tuđman', code: 'ZAG', country: 'Croatia', region: 'Europe', slug: 'zagreb-zag', price: 75 },
  { city: 'Zadar', airport: 'Zadar', code: 'ZAD', country: 'Croatia', region: 'Europe', slug: 'zadar-zad', price: 70 },
  // CYPRUS
  { city: 'Larnaca', airport: 'Larnaca International', code: 'LCA', country: 'Cyprus', region: 'Europe', slug: 'larnaca-lca', price: 85 },
  { city: 'Paphos', airport: 'Paphos International', code: 'PFO', country: 'Cyprus', region: 'Europe', slug: 'paphos-pfo', price: 80 },
  // CZECH REPUBLIC
  { city: 'Prague', airport: 'Václav Havel', code: 'PRG', country: 'Czech Republic', region: 'Europe', slug: 'prague-prg', price: 75 },
  // DENMARK
  { city: 'Copenhagen', airport: 'Copenhagen', code: 'CPH', country: 'Denmark', region: 'Europe', slug: 'copenhagen-cph', price: 90 },
  // DOMINICAN REPUBLIC
  { city: 'Puerto Plata', airport: 'Gregorio Luperón', code: 'POP', country: 'Dominican Republic', region: 'Americas', slug: 'puerto-plata-pop', price: 85 },
  { city: 'Punta Cana', airport: 'Punta Cana', code: 'PUJ', country: 'Dominican Republic', region: 'Americas', slug: 'punta-cana-puj', price: 95 },
  { city: 'Santiago', airport: 'Cibao', code: 'STI', country: 'Dominican Republic', region: 'Americas', slug: 'santiago-sti', price: 80 },
  { city: 'Santo Domingo', airport: 'Las Américas', code: 'SDQ', country: 'Dominican Republic', region: 'Americas', slug: 'santo-domingo-sdq', price: 90 },
  // ECUADOR
  { city: 'Quito', airport: 'Mariscal Sucre', code: 'UIO', country: 'Ecuador', region: 'Americas', slug: 'quito-uio', price: 95 },
  { city: 'Guayaquil', airport: 'José Joaquín de Olmedo', code: 'GYE', country: 'Ecuador', region: 'Americas', slug: 'guayaquil-gye', price: 100 },
  // EGYPT
  { city: 'Cairo', airport: 'Cairo International', code: 'CAI', country: 'Egypt', region: 'Africa', slug: 'cairo-cai', price: 125 },
  { city: 'Hurghada', airport: 'Hurghada International', code: 'HRG', country: 'Egypt', region: 'Africa', slug: 'hurghada-hrg', price: 105 },
  { city: 'Sharm El-Sheikh', airport: 'Sharm El-Sheikh', code: 'SSH', country: 'Egypt', region: 'Africa', slug: 'sharm-el-sheikh-ssh', price: 110 },
  // ESTONIA
  { city: 'Tallinn', airport: 'Lennart Meri Tallinn', code: 'TLL', country: 'Estonia', region: 'Europe', slug: 'tallinn-tll', price: 70 },
  // ETHIOPIA
  { city: 'Addis Ababa', airport: 'Addis Ababa Bole', code: 'ADD', country: 'Ethiopia', region: 'Africa', slug: 'addis-ababa-add', price: 135 },
  // FIJI
  { city: 'Nadi', airport: 'Nadi', code: 'NAN', country: 'Fiji', region: 'Oceania', slug: 'nadi-nan', price: 170 },
  // FINLAND
  { city: 'Helsinki', airport: 'Helsinki Vantaa', code: 'HEL', country: 'Finland', region: 'Europe', slug: 'helsinki-hel', price: 85 },
  // FRANCE
  { city: 'Bordeaux', airport: 'Bordeaux-Mérignac', code: 'BOD', country: 'France', region: 'Europe', slug: 'bordeaux-bod', price: 75 },
  { city: 'Lyon', airport: 'Lyon Saint-Exupéry', code: 'LYS', country: 'France', region: 'Europe', slug: 'lyon-lys', price: 80 },
  { city: 'Marseille', airport: 'Marseille Provence', code: 'MRS', country: 'France', region: 'Europe', slug: 'marseille-mrs', price: 85 },
  { city: 'Nice', airport: 'Nice Côte d\'Azur', code: 'NCE', country: 'France', region: 'Europe', slug: 'nice-nce', price: 90 },
  { city: 'Paris', airport: 'Paris Charles de Gaulle', code: 'CDG', country: 'France', region: 'Europe', slug: 'paris-cdg', price: 120 },
  { city: 'Paris', airport: 'Paris Orly', code: 'ORY', country: 'France', region: 'Europe', slug: 'paris-ory', price: 115 },
  { city: 'Toulouse', airport: 'Toulouse Blagnac', code: 'TLS', country: 'France', region: 'Europe', slug: 'toulouse-tls', price: 70 },
  // GERMANY
  { city: 'Berlin', airport: 'Berlin Brandenburg', code: 'BER', country: 'Germany', region: 'Europe', slug: 'berlin-ber', price: 90 },
  { city: 'Bremen', airport: 'Bremen', code: 'BRE', country: 'Germany', region: 'Europe', slug: 'bremen-bre', price: 70 },
  { city: 'Cologne', airport: 'Cologne Bonn', code: 'CGN', country: 'Germany', region: 'Europe', slug: 'cologne-cgn', price: 75 },
  { city: 'Düsseldorf', airport: 'Düsseldorf', code: 'DUS', country: 'Germany', region: 'Europe', slug: 'dusseldorf-dus', price: 80 },
  { city: 'Frankfurt', airport: 'Frankfurt', code: 'FRA', country: 'Germany', region: 'Europe', slug: 'frankfurt-fra', price: 95 },
  { city: 'Hamburg', airport: 'Hamburg Fuhlsbüttel', code: 'HAM', country: 'Germany', region: 'Europe', slug: 'hamburg-ham', price: 85 },
  { city: 'Hannover', airport: 'Hannover', code: 'HAJ', country: 'Germany', region: 'Europe', slug: 'hannover-haj', price: 75 },
  // GREECE
  { city: 'Athens', airport: 'Athens International', code: 'ATH', country: 'Greece', region: 'Europe', slug: 'athens-ath', price: 85 },
  { city: 'Chania', airport: 'Chania Crete', code: 'CHQ', country: 'Greece', region: 'Europe', slug: 'chania-chq', price: 75 },
  { city: 'Corfu', airport: 'Corfu International', code: 'CFU', country: 'Greece', region: 'Europe', slug: 'corfu-cfu', price: 70 },
  { city: 'Heraklion', airport: 'Heraklion International', code: 'HER', country: 'Greece', region: 'Europe', slug: 'heraklion-her', price: 75 },
  { city: 'Kalamata', airport: 'Kalamata International', code: 'KLX', country: 'Greece', region: 'Europe', slug: 'kalamata-klx', price: 65 },
  { city: 'Kos', airport: 'Kos International', code: 'KGS', country: 'Greece', region: 'Europe', slug: 'kos-kgs', price: 70 },
  { city: 'Mykonos', airport: 'Mykonos', code: 'JMK', country: 'Greece', region: 'Europe', slug: 'mykonos-jmk', price: 80 },
  { city: 'Rhodes', airport: 'Rhodes Diagoras', code: 'RHO', country: 'Greece', region: 'Europe', slug: 'rhodes-rho', price: 75 },
  { city: 'Santorini', airport: 'Santorini Thira', code: 'JTR', country: 'Greece', region: 'Europe', slug: 'santorini-jtr', price: 85 },
  { city: 'Thessaloniki', airport: 'Thessaloniki', code: 'SKG', country: 'Greece', region: 'Europe', slug: 'thessaloniki-skg', price: 75 },
  { city: 'Zakynthos', airport: 'Zakynthos', code: 'ZTH', country: 'Greece', region: 'Europe', slug: 'zakynthos-zth', price: 70 },
  // HONG KONG
  { city: 'Hong Kong', airport: 'Hong Kong', code: 'HKG', country: 'Hong Kong', region: 'Asia', slug: 'hong-kong-hkg', price: 185 },
  // HUNGARY
  { city: 'Budapest', airport: 'Ferenc Liszt', code: 'BUD', country: 'Hungary', region: 'Europe', slug: 'budapest-bud', price: 80 },
  // ICELAND
  { city: 'Reykjavik', airport: 'Keflavík International', code: 'KEF', country: 'Iceland', region: 'Europe', slug: 'reykjavik-kef', price: 100 },
  // INDIA
  { city: 'Delhi', airport: 'Indira Gandhi', code: 'DEL', country: 'India', region: 'Asia', slug: 'delhi-del', price: 120 },
  { city: 'Goa', airport: 'Manohar International', code: 'GOX', country: 'India', region: 'Asia', slug: 'goa-gox', price: 100 },
  { city: 'Hyderabad', airport: 'Rajiv Gandhi', code: 'HYD', country: 'India', region: 'Asia', slug: 'hyderabad-hyd', price: 110 },
  // INDONESIA
  { city: 'Denpasar', airport: 'Ngurah Rai', code: 'DPS', country: 'Indonesia', region: 'Asia', slug: 'denpasar-dps', price: 125 },
  { city: 'Jakarta', airport: 'Jakarta International', code: 'CGK', country: 'Indonesia', region: 'Asia', slug: 'jakarta-cgk', price: 135 },
  // IRELAND
  { city: 'Cork', airport: 'Cork', code: 'ORK', country: 'Ireland', region: 'Europe', slug: 'cork-ork', price: 70 },
  { city: 'Dublin', airport: 'Dublin', code: 'DUB', country: 'Ireland', region: 'Europe', slug: 'dublin-dub', price: 80 },
  { city: 'Shannon', airport: 'Shannon', code: 'SNN', country: 'Ireland', region: 'Europe', slug: 'shannon-snn', price: 75 },
  // ISRAEL
  { city: 'Tel Aviv', airport: 'Ben Gurion', code: 'TLV', country: 'Israel', region: 'Middle East', slug: 'tel-aviv-tlv', price: 130 },
  // ITALY
  { city: 'Bari', airport: 'Karol Wojtyla', code: 'BRI', country: 'Italy', region: 'Europe', slug: 'bari-bri', price: 70 },
  { city: 'Bergamo', airport: 'Orio al Serio', code: 'BGY', country: 'Italy', region: 'Europe', slug: 'bergamo-bgy', price: 75 },
  { city: 'Bologna', airport: 'Guglielmo Marconi', code: 'BLQ', country: 'Italy', region: 'Europe', slug: 'bologna-blq', price: 70 },
  { city: 'Brindisi', airport: 'Salento', code: 'BSD', country: 'Italy', region: 'Europe', slug: 'brindisi-bsd', price: 65 },
  { city: 'Catania', airport: 'Fontanarossa', code: 'CTA', country: 'Italy', region: 'Europe', slug: 'catania-cta', price: 70 },
  { city: 'Florence', airport: 'Peretola', code: 'FLR', country: 'Italy', region: 'Europe', slug: 'florence-flr', price: 75 },
  { city: 'Milan', airport: 'Milan Linate', code: 'LIN', country: 'Italy', region: 'Europe', slug: 'milan-lin', price: 85 },
  { city: 'Milan', airport: 'Milan Malpensa', code: 'MXP', country: 'Italy', region: 'Europe', slug: 'milan-mxp', price: 90 },
  { city: 'Naples', airport: 'Capodichino', code: 'NAP', country: 'Italy', region: 'Europe', slug: 'naples-nap', price: 75 },
  { city: 'Palermo', airport: 'Falcone Borsellino', code: 'PMO', country: 'Italy', region: 'Europe', slug: 'palermo-pmo', price: 70 },
  { city: 'Pisa', airport: 'Galileo Galilei', code: 'PSA', country: 'Italy', region: 'Europe', slug: 'pisa-psa', price: 70 },
  { city: 'Rome', airport: 'Fiumicino', code: 'FCO', country: 'Italy', region: 'Europe', slug: 'rome-fco', price: 85 },
  { city: 'Cagliari', airport: 'Cagliari Elmas', code: 'CAG', country: 'Italy', region: 'Europe', slug: 'cagliari-cag', price: 65 },
  { city: 'Olbia', airport: 'Costa Smeralda', code: 'OLB', country: 'Italy', region: 'Europe', slug: 'olbia-olb', price: 70 },
  { city: 'Turin', airport: 'Turin', code: 'TRN', country: 'Italy', region: 'Europe', slug: 'turin-trn', price: 75 },
  { city: 'Venice', airport: 'Marco Polo', code: 'VCE', country: 'Italy', region: 'Europe', slug: 'venice-vce', price: 80 },
  // JAMAICA
  { city: 'Montego Bay', airport: 'Sangster', code: 'MBJ', country: 'Jamaica', region: 'Americas', slug: 'montego-bay-mbj', price: 115 },
  // JAPAN
  { city: 'Osaka', airport: 'Kansai', code: 'KIX', country: 'Japan', region: 'Asia', slug: 'osaka-kix', price: 195 },
  { city: 'Tokyo', airport: 'Haneda', code: 'HND', country: 'Japan', region: 'Asia', slug: 'tokyo-hnd', price: 205 },
  { city: 'Tokyo', airport: 'Narita', code: 'NRT', country: 'Japan', region: 'Asia', slug: 'tokyo-nrt', price: 210 },
  // JORDAN
  { city: 'Amman', airport: 'Queen Alia', code: 'AMM', country: 'Jordan', region: 'Middle East', slug: 'amman-amm', price: 115 },
  // KAZAKHSTAN
  { city: 'Astana', airport: 'Astana International', code: 'NQZ', country: 'Kazakhstan', region: 'Europe', slug: 'astana-nqz', price: 110 },
  // KENYA
  { city: 'Nairobi', airport: 'Nairobi International', code: 'NBO', country: 'Kenya', region: 'Africa', slug: 'nairobi-nbo', price: 140 },
  // LATVIA
  { city: 'Riga', airport: 'Riga International', code: 'RIX', country: 'Latvia', region: 'Europe', slug: 'riga-rix', price: 70 },
  // LEBANON
  { city: 'Beirut', airport: 'Rafic Hariri', code: 'BEY', country: 'Lebanon', region: 'Middle East', slug: 'beirut-bey', price: 125 },
  // LITHUANIA
  { city: 'Vilnius', airport: 'Vilnius International', code: 'VNO', country: 'Lithuania', region: 'Europe', slug: 'vilnius-vno', price: 70 },
  // MALAYSIA
  { city: 'Kuala Lumpur', airport: 'Kuala Lumpur', code: 'KUL', country: 'Malaysia', region: 'Asia', slug: 'kuala-lumpur-kul', price: 155 },
  // MALDIVES
  { city: 'Male', airport: 'Velana', code: 'MLE', country: 'Maldives', region: 'Asia', slug: 'male-mle', price: 175 },
  // MALTA
  { city: 'Malta', airport: 'Malta International', code: 'MLA', country: 'Malta', region: 'Europe', slug: 'malta-mla', price: 80 },
  // MAURITIUS
  { city: 'Mauritius', airport: 'Sir Seewoosagur Ramgoolam', code: 'MRU', country: 'Mauritius', region: 'Africa', slug: 'mauritius-mru', price: 185 },
  // MEXICO
  { city: 'Cancun', airport: 'Cancun International', code: 'CUN', country: 'Mexico', region: 'Americas', slug: 'cancun-cun', price: 105 },
  { city: 'Los Cabos', airport: 'Los Cabos', code: 'SJD', country: 'Mexico', region: 'Americas', slug: 'los-cabos-sjd', price: 110 },
  { city: 'Mérida', airport: 'Mérida International', code: 'MID', country: 'Mexico', region: 'Americas', slug: 'merida-mid', price: 85 },
  { city: 'Mexico City', airport: 'Mexico City', code: 'MEX', country: 'Mexico', region: 'Americas', slug: 'mexico-city-mex', price: 115 },
  { city: 'Puerto Vallarta', airport: 'Puerto Vallarta', code: 'PVR', country: 'Mexico', region: 'Americas', slug: 'puerto-vallarta-pvr', price: 100 },
  // MONTENEGRO
  { city: 'Podgorica', airport: 'Podgorica', code: 'TGD', country: 'Montenegro', region: 'Europe', slug: 'podgorica-tgd', price: 75 },
  { city: 'Tivat', airport: 'Tivat', code: 'TIV', country: 'Montenegro', region: 'Europe', slug: 'tivat-tiv', price: 70 },
  // MOROCCO
  { city: 'Agadir', airport: 'Al Massira', code: 'AGA', country: 'Morocco', region: 'Africa', slug: 'agadir-aga', price: 85 },
  { city: 'Casablanca', airport: 'Mohammed V', code: 'CMN', country: 'Morocco', region: 'Africa', slug: 'casablanca-cmn', price: 95 },
  { city: 'Dakhla', airport: 'Dakhla', code: 'VIL', country: 'Morocco', region: 'Africa', slug: 'dakhla-vil', price: 75 },
  { city: 'Fes', airport: 'Fes Sais', code: 'FEZ', country: 'Morocco', region: 'Africa', slug: 'fes-fez', price: 80 },
  { city: 'Laayoune', airport: 'Hassan I', code: 'EUN', country: 'Morocco', region: 'Africa', slug: 'laayoune-eun', price: 70 },
  { city: 'Marrakech', airport: 'Marrakech', code: 'RAK', country: 'Morocco', region: 'Africa', slug: 'marrakech-rak', price: 90 },
  { city: 'Oujda', airport: 'Oujda Angads', code: 'OUD', country: 'Morocco', region: 'Africa', slug: 'oujda-oud', price: 70 },
  { city: 'Rabat', airport: 'Rabat Salé', code: 'RBA', country: 'Morocco', region: 'Africa', slug: 'rabat-rba', price: 80 },
  { city: 'Tangier', airport: 'Ibn Battouta', code: 'TNG', country: 'Morocco', region: 'Africa', slug: 'tangier-tng', price: 85 },
  // NETHERLANDS
  { city: 'Amsterdam', airport: 'Amsterdam Schiphol', code: 'AMS', country: 'Netherlands', region: 'Europe', slug: 'amsterdam-ams', price: 80 },
  // NEW ZEALAND
  { city: 'Auckland', airport: 'Auckland', code: 'AKL', country: 'New Zealand', region: 'Oceania', slug: 'auckland-akl', price: 180 },
  { city: 'Christchurch', airport: 'Christchurch', code: 'CHC', country: 'New Zealand', region: 'Oceania', slug: 'christchurch-chc', price: 175 },
  { city: 'Queenstown', airport: 'Queenstown', code: 'ZQN', country: 'New Zealand', region: 'Oceania', slug: 'queenstown-zqn', price: 170 },
  { city: 'Wellington', airport: 'Wellington International', code: 'WLG', country: 'New Zealand', region: 'Oceania', slug: 'wellington-wlg', price: 170 },
  // NORWAY
  { city: 'Oslo', airport: 'Oslo Gardermoen', code: 'OSL', country: 'Norway', region: 'Europe', slug: 'oslo-osl', price: 95 },
  // OMAN
  { city: 'Muscat', airport: 'Muscat International', code: 'MCT', country: 'Oman', region: 'Middle East', slug: 'muscat-mct', price: 140 },
  // PAKISTAN
  { city: 'Karachi', airport: 'Jinnah', code: 'KHI', country: 'Pakistan', region: 'Asia', slug: 'karachi-khi', price: 115 },
  // PANAMA
  { city: 'Panama City', airport: 'Tocumen', code: 'PTY', country: 'Panama', region: 'Americas', slug: 'panama-city-pty', price: 100 },
  // PERU
  { city: 'Lima', airport: 'Jorge Chávez', code: 'LIM', country: 'Peru', region: 'Americas', slug: 'lima-lim', price: 130 },
  // PHILIPPINES
  { city: 'Boracay', airport: 'Boracay Malay', code: 'MPH', country: 'Philippines', region: 'Asia', slug: 'boracay-mph', price: 145 },
  { city: 'Clark', airport: 'Clark International', code: 'CRK', country: 'Philippines', region: 'Asia', slug: 'clark-crk', price: 140 },
  { city: 'Davao', airport: 'Davao International', code: 'DVO', country: 'Philippines', region: 'Asia', slug: 'davao-dvo', price: 140 },
  { city: 'Kalibo', airport: 'Kalibo International', code: 'KLO', country: 'Philippines', region: 'Asia', slug: 'kalibo-klo', price: 135 },
  { city: 'Cebu', airport: 'Mactan-Cebu', code: 'CEB', country: 'Philippines', region: 'Asia', slug: 'cebu-ceb', price: 140 },
  { city: 'Manila', airport: 'Ninoy Aquino', code: 'MNL', country: 'Philippines', region: 'Asia', slug: 'manila-mnl', price: 155 },
  { city: 'Puerto Princesa', airport: 'Puerto Princesa Palawan', code: 'PPS', country: 'Philippines', region: 'Asia', slug: 'puerto-princesa-pps', price: 135 },
  // POLAND
  { city: 'Krakow', airport: 'Krakow International', code: 'KRK', country: 'Poland', region: 'Europe', slug: 'krakow-krk', price: 75 },
  { city: 'Warsaw', airport: 'Warsaw Chopin', code: 'WAW', country: 'Poland', region: 'Europe', slug: 'warsaw-waw', price: 80 },
  // PORTUGAL
  { city: 'Faro', airport: 'Gago Coutinho', code: 'FAO', country: 'Portugal', region: 'Europe', slug: 'faro-fao', price: 75 },
  { city: 'Lisbon', airport: 'Humberto Delgado', code: 'LIS', country: 'Portugal', region: 'Europe', slug: 'lisbon-lis', price: 85 },
  { city: 'Funchal', airport: 'Funchal', code: 'FNC', country: 'Portugal', region: 'Europe', slug: 'funchal-fnc', price: 80 },
  { city: 'Ponta Delgada', airport: 'Ponta Delgada', code: 'PDL', country: 'Portugal', region: 'Europe', slug: 'ponta-delgada-pdl', price: 80 },
  { city: 'Porto', airport: 'Francisco Sá Carneiro', code: 'OPO', country: 'Portugal', region: 'Europe', slug: 'porto-opo', price: 75 },
  // PUERTO RICO
  { city: 'San Juan', airport: 'San Juan International', code: 'SJU', country: 'Puerto Rico', region: 'Americas', slug: 'san-juan-sju', price: 100 },
  // QATAR
  { city: 'Doha', airport: 'Hamad International', code: 'DOH', country: 'Qatar', region: 'Middle East', slug: 'doha-doh', price: 160 },
  // ROMANIA
  { city: 'Bucharest', airport: 'Henri Coandă', code: 'OTP', country: 'Romania', region: 'Europe', slug: 'bucharest-otp', price: 75 },
  // SAINT BARTHÉLEMY
  { city: 'Saint Barthélemy', airport: 'Saint Barthélemy', code: 'SBH', country: 'Saint Barthélemy', region: 'Americas', slug: 'saint-barthelemy-sbh', price: 100 },
  // SAINT LUCIA
  { city: 'Saint Lucia', airport: 'Hewanorra', code: 'UVF', country: 'Saint Lucia', region: 'Americas', slug: 'saint-lucia-uvf', price: 95 },
  // SAUDI ARABIA
  { city: 'Dammam', airport: 'King Fahd', code: 'DMM', country: 'Saudi Arabia', region: 'Middle East', slug: 'dammam-dmm', price: 145 },
  { city: 'Jeddah', airport: 'King Abdulaziz', code: 'JED', country: 'Saudi Arabia', region: 'Middle East', slug: 'jeddah-jed', price: 150 },
  { city: 'Riyadh', airport: 'King Khalid', code: 'RUH', country: 'Saudi Arabia', region: 'Middle East', slug: 'riyadh-ruh', price: 140 },
  // SENEGAL
  { city: 'Dakar', airport: 'Blaise Diagne', code: 'DSS', country: 'Senegal', region: 'Africa', slug: 'dakar-dss', price: 110 },
  // SERBIA
  { city: 'Belgrade', airport: 'Nikola Tesla', code: 'BEG', country: 'Serbia', region: 'Europe', slug: 'belgrade-beg', price: 75 },
  // SEYCHELLES
  { city: 'Seychelles', airport: 'Seychelles', code: 'SEZ', country: 'Seychelles', region: 'Africa', slug: 'seychelles-sez', price: 195 },
  // SINGAPORE
  { city: 'Singapore', airport: 'Singapore Changi', code: 'SIN', country: 'Singapore', region: 'Asia', slug: 'singapore-sin', price: 200 },
  // SLOVENIA
  { city: 'Ljubljana', airport: 'Jože Pučnik', code: 'LJU', country: 'Slovenia', region: 'Europe', slug: 'ljubljana-lju', price: 70 },
  // SOUTH AFRICA
  { city: 'Cape Town', airport: 'Cape Town', code: 'CPT', country: 'South Africa', region: 'Africa', slug: 'cape-town-cpt', price: 155 },
  { city: 'Johannesburg', airport: 'O.R. Tambo', code: 'JNB', country: 'South Africa', region: 'Africa', slug: 'johannesburg-jnb', price: 165 },
  // SOUTH KOREA
  { city: 'Seoul', airport: 'Incheon', code: 'ICN', country: 'South Korea', region: 'Asia', slug: 'seoul-icn', price: 185 },
  // SPAIN
  { city: 'Barcelona', airport: 'Josep Tarradellas', code: 'BCN', country: 'Spain', region: 'Europe', slug: 'barcelona-bcn', price: 45 },
  { city: 'Ibiza', airport: 'Ibiza', code: 'IBZ', country: 'Spain', region: 'Europe', slug: 'ibiza-ibz', price: 65 },
  { city: 'Las Palmas', airport: 'Gran Canaria', code: 'LPA', country: 'Spain', region: 'Europe', slug: 'las-palmas-lpa', price: 70 },
  { city: 'Madrid', airport: 'Adolfo Suárez', code: 'MAD', country: 'Spain', region: 'Europe', slug: 'madrid-mad', price: 75 },
  { city: 'Málaga', airport: 'Málaga International', code: 'AGP', country: 'Spain', region: 'Europe', slug: 'malaga-agp', price: 70 },
  { city: 'Palma de Mallorca', airport: 'Palma de Mallorca', code: 'PMI', country: 'Spain', region: 'Europe', slug: 'palma-de-mallorca-pmi', price: 70 },
  { city: 'Tenerife', airport: 'Tenerife South', code: 'TFS', country: 'Spain', region: 'Europe', slug: 'tenerife-tfs', price: 75 },
  { city: 'Valencia', airport: 'Valencia', code: 'VLC', country: 'Spain', region: 'Europe', slug: 'valencia-vlc', price: 65 },
  // SRI LANKA
  { city: 'Colombo', airport: 'Bandaranaike', code: 'CMB', country: 'Sri Lanka', region: 'Asia', slug: 'colombo-cmb', price: 130 },
  // ST. MAARTEN
  { city: 'Sint Maarten', airport: 'Princess Juliana', code: 'SXM', country: 'St. Maarten', region: 'Americas', slug: 'sint-maarten-sxm', price: 105 },
  // SWEDEN
  { city: 'Stockholm', airport: 'Arlanda', code: 'ARN', country: 'Sweden', region: 'Europe', slug: 'stockholm-arn', price: 95 },
  // SWITZERLAND
  { city: 'Basel', airport: 'EuroAirport Basel-Mulhouse-Freiburg', code: 'BSL', country: 'Switzerland', region: 'Europe', slug: 'basel-bsl', price: 90 },
  { city: 'Geneva', airport: 'Geneva International', code: 'GVA', country: 'Switzerland', region: 'Europe', slug: 'geneva-gva', price: 100 },
  { city: 'Zurich', airport: 'Zurich', code: 'ZHR', country: 'Switzerland', region: 'Europe', slug: 'zurich-zhr', price: 105 },
  // TAIWAN
  { city: 'Taipei', airport: 'Taoyuan', code: 'TPE', country: 'Taiwan', region: 'Asia', slug: 'taipei-tpe', price: 175 },
  // THAILAND
  { city: 'Bangkok', airport: 'Suvarnabhumi', code: 'BKK', country: 'Thailand', region: 'Asia', slug: 'bangkok-bkk', price: 125 },
  // TURKEY
  { city: 'Antalya', airport: 'Antalya', code: 'AYT', country: 'Turkey', region: 'Europe', slug: 'antalya-ayt', price: 95 },
  { city: 'Bodrum', airport: 'Bodrum Milas', code: 'BJV', country: 'Turkey', region: 'Europe', slug: 'bodrum-bjv', price: 85 },
  { city: 'Istanbul', airport: 'Istanbul International', code: 'IST', country: 'Turkey', region: 'Europe', slug: 'istanbul-ist', price: 110 },
  { city: 'Istanbul', airport: 'Sabiha Gökçen', code: 'SAW', country: 'Turkey', region: 'Europe', slug: 'istanbul-saw', price: 105 },
  // TURKS & CAICOS
  { city: 'Providenciales', airport: 'Providenciales', code: 'PLS', country: 'Turks & Caicos', region: 'Americas', slug: 'providenciales-pls', price: 110 },
  // UAE
  { city: 'Dubai', airport: 'Dubai International', code: 'DXB', country: 'United Arab Emirates', region: 'Middle East', slug: 'dubai-dxb', price: 180 },
  { city: 'Abu Dhabi', airport: 'Abu Dhabi International', code: 'AUH', country: 'United Arab Emirates', region: 'Middle East', slug: 'abu-dhabi-auh', price: 170 },
  // UKRAINE
  { city: 'Kyiv', airport: 'Boryspil', code: 'KBP', country: 'Ukraine', region: 'Europe', slug: 'kyiv-kbp', price: 85 },
  // UNITED KINGDOM
  { city: 'Belfast', airport: 'Belfast', code: 'BFS', country: 'United Kingdom', region: 'Europe', slug: 'belfast-bfs', price: 75 },
  { city: 'Birmingham', airport: 'Birmingham', code: 'BHX', country: 'United Kingdom', region: 'Europe', slug: 'birmingham-bhx', price: 70 },
  { city: 'Bristol', airport: 'Bristol', code: 'BRS', country: 'United Kingdom', region: 'Europe', slug: 'bristol-brs', price: 70 },
  { city: 'Edinburgh', airport: 'Edinburgh', code: 'EDI', country: 'United Kingdom', region: 'Europe', slug: 'edinburgh-edi', price: 75 },
  { city: 'Glasgow', airport: 'Glasgow', code: 'GLA', country: 'United Kingdom', region: 'Europe', slug: 'glasgow-gla', price: 70 },
  { city: 'Leeds', airport: 'Leeds Bradford', code: 'LBA', country: 'United Kingdom', region: 'Europe', slug: 'leeds-lba', price: 70 },
  { city: 'Liverpool', airport: 'John Lennon', code: 'LPL', country: 'United Kingdom', region: 'Europe', slug: 'liverpool-lpl', price: 70 },
  { city: 'London', airport: 'London City', code: 'LCY', country: 'United Kingdom', region: 'Europe', slug: 'london-lcy', price: 95 },
  { city: 'London', airport: 'Gatwick', code: 'LGW', country: 'United Kingdom', region: 'Europe', slug: 'london-lgw', price: 130 },
  { city: 'London', airport: 'Heathrow', code: 'LHR', country: 'United Kingdom', region: 'Europe', slug: 'london-lhr', price: 150 },
  { city: 'London', airport: 'Luton', code: 'LTN', country: 'United Kingdom', region: 'Europe', slug: 'london-ltn', price: 115 },
  { city: 'London', airport: 'Stansted', code: 'STN', country: 'United Kingdom', region: 'Europe', slug: 'london-stn', price: 110 },
  { city: 'Manchester', airport: 'Manchester', code: 'MAN', country: 'United Kingdom', region: 'Europe', slug: 'manchester-man', price: 85 },
  { city: 'Newcastle', airport: 'Newcastle International', code: 'NCL', country: 'United Kingdom', region: 'Europe', slug: 'newcastle-ncl', price: 70 },
  { city: 'Norwich', airport: 'Norwich', code: 'NWI', country: 'United Kingdom', region: 'Europe', slug: 'norwich-nwi', price: 65 },
  // URUGUAY
  { city: 'Montevideo', airport: 'Carrasco International', code: 'MVD', country: 'Uruguay', region: 'Americas', slug: 'montevideo-mvd', price: 140 },
  { city: 'Punta del Este', airport: 'Punta del Este', code: 'PDP', country: 'Uruguay', region: 'Americas', slug: 'punta-del-este-pdp', price: 130 },
  // USA
  { city: 'Atlanta', airport: 'Hartsfield Jackson', code: 'ATL', country: 'United States', region: 'Americas', slug: 'atlanta-atl', price: 125 },
  { city: 'Austin', airport: 'Bergstrom', code: 'AUS', country: 'United States', region: 'Americas', slug: 'austin-aus', price: 105 },
  { city: 'Baltimore', airport: 'Baltimore Washington', code: 'BWI', country: 'United States', region: 'Americas', slug: 'baltimore-bwi', price: 105 },
  { city: 'Boston', airport: 'Logan', code: 'BOS', country: 'United States', region: 'Americas', slug: 'boston-bos', price: 120 },
  { city: 'Charlotte', airport: 'Douglas', code: 'CLT', country: 'United States', region: 'Americas', slug: 'charlotte-clt', price: 105 },
  { city: 'Chicago', airport: 'Midway', code: 'MDW', country: 'United States', region: 'Americas', slug: 'chicago-mdw', price: 110 },
  { city: 'Chicago', airport: 'O\'Hare', code: 'ORD', country: 'United States', region: 'Americas', slug: 'chicago-ord', price: 115 },
  { city: 'Cincinnati', airport: 'Northern Kentucky', code: 'CVG', country: 'United States', region: 'Americas', slug: 'cincinnati-cvg', price: 100 },
  { city: 'Cleveland', airport: 'Hopkins', code: 'CLE', country: 'United States', region: 'Americas', slug: 'cleveland-cle', price: 100 },
  { city: 'Columbus', airport: 'John Glenn', code: 'CMH', country: 'United States', region: 'Americas', slug: 'columbus-cmh', price: 95 },
  { city: 'Dallas', airport: 'Fort Worth', code: 'DFW', country: 'United States', region: 'Americas', slug: 'dallas-dfw', price: 120 },
  { city: 'Denver', airport: 'Denver International', code: 'DEN', country: 'United States', region: 'Americas', slug: 'denver-den', price: 115 },
  { city: 'Detroit', airport: 'Detroit Metropolitan Wayne County', code: 'DTW', country: 'United States', region: 'Americas', slug: 'detroit-dtw', price: 110 },
  { city: 'Fort Lauderdale', airport: 'Fort Lauderdale Hollywood', code: 'FLL', country: 'United States', region: 'Americas', slug: 'fort-lauderdale-fll', price: 110 },
  { city: 'Orange County', airport: 'John Wayne', code: 'SNA', country: 'United States', region: 'Americas', slug: 'orange-county-sna', price: 115 },
  { city: 'Burbank', airport: 'Hollywood Burbank', code: 'BUR', country: 'United States', region: 'Americas', slug: 'burbank-bur', price: 110 },
  { city: 'Houston', airport: 'George Bush Intercontinental', code: 'IAH', country: 'United States', region: 'Americas', slug: 'houston-iah', price: 120 },
  { city: 'Indianapolis', airport: 'Indianapolis', code: 'IND', country: 'United States', region: 'Americas', slug: 'indianapolis-ind', price: 95 },
  { city: 'Jacksonville', airport: 'Jacksonville', code: 'JAX', country: 'United States', region: 'Americas', slug: 'jacksonville-jax', price: 100 },
  { city: 'Las Vegas', airport: 'Harry Reid', code: 'LAS', country: 'United States', region: 'Americas', slug: 'las-vegas-las', price: 125 },
  { city: 'Long Beach', airport: 'Long Beach', code: 'LGB', country: 'United States', region: 'Americas', slug: 'long-beach-lgb', price: 105 },
  { city: 'Los Angeles', airport: 'Los Angeles', code: 'LAX', country: 'United States', region: 'Americas', slug: 'los-angeles-lax', price: 140 },
  { city: 'Miami', airport: 'Miami International', code: 'MIA', country: 'United States', region: 'Americas', slug: 'miami-mia', price: 125 },
  { city: 'Minneapolis', airport: 'Minneapolis Saint Paul', code: 'MSP', country: 'United States', region: 'Americas', slug: 'minneapolis-msp', price: 115 },
  { city: 'Nashville', airport: 'Nashville International', code: 'BNA', country: 'United States', region: 'Americas', slug: 'nashville-bna', price: 100 },
  { city: 'New Orleans', airport: 'Louis Armstrong', code: 'MSY', country: 'United States', region: 'Americas', slug: 'new-orleans-msy', price: 110 },
  { city: 'New York', airport: 'John F. Kennedy', code: 'JFK', country: 'United States', region: 'Americas', slug: 'new-york-jfk', price: 150 },
  { city: 'New York', airport: 'LaGuardia', code: 'LGA', country: 'United States', region: 'Americas', slug: 'new-york-lga', price: 145 },
  { city: 'Newark', airport: 'Newark Liberty', code: 'EWR', country: 'United States', region: 'Americas', slug: 'newark-ewr', price: 140 },
  { city: 'Oakland', airport: 'Oakland International', code: 'OAK', country: 'United States', region: 'Americas', slug: 'oakland-oak', price: 115 },
  { city: 'Orlando', airport: 'Orlando International', code: 'MCO', country: 'United States', region: 'Americas', slug: 'orlando-mco', price: 110 },
  { city: 'Palm Beach', airport: 'Palm Beach', code: 'PBI', country: 'United States', region: 'Americas', slug: 'palm-beach-pbi', price: 110 },
  { city: 'Philadelphia', airport: 'Philadelphia', code: 'PHL', country: 'United States', region: 'Americas', slug: 'philadelphia-phl', price: 115 },
  { city: 'Phoenix', airport: 'Sky Harbor', code: 'PHX', country: 'United States', region: 'Americas', slug: 'phoenix-phx', price: 120 },
  { city: 'Portland', airport: 'Portland International', code: 'PDX', country: 'United States', region: 'Americas', slug: 'portland-pdx', price: 120 },
  { city: 'San Diego', airport: 'San Diego', code: 'SAN', country: 'United States', region: 'Americas', slug: 'san-diego-san', price: 125 },
  { city: 'San Francisco', airport: 'San Francisco', code: 'SFO', country: 'United States', region: 'Americas', slug: 'san-francisco-sfo', price: 135 },
  { city: 'Seattle', airport: 'Tacoma', code: 'SEA', country: 'United States', region: 'Americas', slug: 'seattle-sea', price: 130 },
  { city: 'Saint Louis', airport: 'Lambert', code: 'STL', country: 'United States', region: 'Americas', slug: 'saint-louis-stl', price: 105 },
  { city: 'Tampa', airport: 'Tampa International', code: 'TPA', country: 'United States', region: 'Americas', slug: 'tampa-tpa', price: 110 },
  { city: 'Washington DC', airport: 'Dulles', code: 'IAD', country: 'United States', region: 'Americas', slug: 'washington-dc-iad', price: 120 },
  { city: 'Washington DC', airport: 'Ronald Reagan National', code: 'DCA', country: 'United States', region: 'Americas', slug: 'washington-dc-dca', price: 115 },
  // VIETNAM
  { city: 'Cam Ranh', airport: 'Cam Ranh', code: 'CXR', country: 'Vietnam', region: 'Asia', slug: 'cam-ranh-cxr', price: 125 },
  { city: 'Da Nang', airport: 'Da Nang', code: 'DAD', country: 'Vietnam', region: 'Asia', slug: 'da-nang-dad', price: 120 },
  { city: 'Hanoi', airport: 'Noi Bai', code: 'HAN', country: 'Vietnam', region: 'Asia', slug: 'hanoi-han', price: 130 },
  { city: 'Ho Chi Minh City', airport: 'Tan Son Nhat', code: 'SGN', country: 'Vietnam', region: 'Asia', slug: 'ho-chi-minh-city-sgn', price: 135 },
]
