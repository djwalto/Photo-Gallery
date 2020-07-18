CREATE TABLE "galleryitems"
(
    "id" SERIAL PRIMARY KEY,
    "path" varchar(80),
    "description" varchar (500),
    "likes" integer
);

INSERT INTO "galleryitems"
    ("path", "description", "likes")
VALUES
    ('images/IMG_3395.png', 'Photo of my daughter and I on our bikes in 2017.', '7'
);

INSERT INTO "galleryitems"
    ("path", "description", "likes")
VALUES
    ('images/IMG_3396.png', 'Photo of my son graduating 6th grade in 2017.', '0'
);

INSERT INTO "galleryitems"
    ("path", "description", "likes")
VALUES
    ('images/IMG_3397.png', 'Photo of my girlfriend and I.', '0'
);

INSERT INTO "galleryitems"
    ("path", "description", "likes")
VALUES
    ('images/IMG_3394.png', 'Photo of my daughter on my bike for the first time.', '0'
);

INSERT INTO "galleryitems"
    ("path", "description", "likes")
VALUES
    ('images/IMG_3398.png', 'Photo of all the kids now.', '0'
);

INSERT INTO "galleryitems"
    ("path", "description", "likes")
VALUES
    ('images/LUCKYSTRIKE.png', 'Photo of my son on a bike at a dealership.', '0'
);
