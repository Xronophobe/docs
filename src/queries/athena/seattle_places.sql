SELECT id,
       class,
       CAST(sources AS JSON) AS sources,
       sources[1].dataset AS primary_source,
       CAST(names AS JSON) AS names,
       ST_GeomFromBinary(geometry) AS geometry
FROM
    overture.release.__ATHENA_OVERTURE_RELEASE
WHERE theme='places'
    AND type='place'
    AND bbox.xmin > -122.4447744
        AND bbox.xmax < -122.2477071
        AND bbox.ymin > 47.5621587
        AND bbox.ymax < 47.7120663
