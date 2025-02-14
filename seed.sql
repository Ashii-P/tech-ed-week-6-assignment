CREATE TABLE IF NOT EXISTS upgradeShop (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name TEXT,
    cost INTEGER,
    increase INTEGER
);

INSERT INTO upgradeShop (name, cost, increase) VALUES
('Bubble Blaster', 100, 1),
('Tentacle Booster', 500, 5),
('Tidal Surge', 1000, 10),
('Mega Wave', 2000, 20),
('Ink Jetpack', 5000, 50),
('Tentacle Tsunami', 10000, 100),
('Whirlpool Clicker', 20000, 200),
('Poseidon`s Blessing', 50000, 500),
('Octo Frenzy', 100000, 1000),
('Kraken`s Awakening', 200000, 2000);