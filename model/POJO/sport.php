<?php


class Sport
{
    private $sportID;
    private $natprevaruvanje;
    private $poluvreminja;


    /**
     * @param mixed $sportID
     * 
     * @return [type]
     */
    public function setSportID($sportID)
    {
        $this->sportID = $sportID;
    }

    /**
     * @param mixed $natprevaruvanje
     * 
     * @return [type]
     */
    public function setNatprevaruvanje($natprevaruvanje)
    {
        $this->natprevaruvanje = $natprevaruvanje;
    }

    public function setPoluvreminja($poluvreminja)
    {
        $this->poluvreminja = $poluvreminja;
    }


    /**
     * @return [type]
     */
    public function getSportID()
    {
        return $this->sportID;
    }

    /**
     * @return [type]
     */
    public function getNatprevaruvanje()
    {
        return $this->natprevaruvanje;
    }

    public function getPoluvreminja()
    {
        return $this->poluvreminja;
    }
}
