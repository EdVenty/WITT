import SnowflakeId from 'snowflake-id';

var snowflake = new SnowflakeId({
    mid : Math.round(Math.random() * 100),
    offset : Date.now()
});

export function generateId(){
    return snowflake.generate();
}