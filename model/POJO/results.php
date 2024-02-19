<?php

class Results
{
    private $resultsID;
    private $league;
    private $home;
    private $prvoPoluvremeHome;
    private $vtoroPoluvremeHome;
    private $tretoPoluvremeHome;
    private $cetvrtoPoluvremeHome;
    private $konecenHome;
    private $konecenAway;
    private $prvoPoluvremeAway;
    private $vtoroPoluvremeAway;
    private $tretoPoluvremeAway;
    private $cetvrtoPoluvremeAway;
    private $away;
    private $datum;
    private $vreme;
    private $sport;

    //Setters

    /**
     * @param mixed $resultsID
     * 
     * @return void
     */
    public function setResultsID($resultsID): void
    {
        $this->resultsID = $resultsID;
    }

    /**
     * @param mixed $league
     * 
     * @return void
     */
    public function setLeague($league): void
    {
        $this->league = $league;
    }

    /**
     * @param mixed $home
     * 
     * @return void
     */
    public function setHome($home): void
    {
        $this->home = $home;
    }

    public function setPrvoPoluvremeHome($prvoPoluvremeHome): void
    {
        $this->prvoPoluvremeHome = $prvoPoluvremeHome;
    }

    public function setVtoroPoluvremeHome($vtoroPoluvremeHome): void
    {
        $this->vtoroPoluvremeHome = $vtoroPoluvremeHome;
    }

    public function setTretoPoluvremeHome($tretoPoluvremeHome): void
    {
        $this->tretoPoluvremeHome = $tretoPoluvremeHome;
    }

    public function setCetvrtoPoluvremeHome($cetvrtoPoluvremeHome): void
    {
        $this->cetvrtoPoluvremeHome = $cetvrtoPoluvremeHome;
    }

    public function setKonecenHome($konecenHome): void
    {
        $this->konecenHome = $konecenHome;
    }
    public function setKonecenAway($konecenAway): void
    {
        $this->konecenAway = $konecenAway;
    }
    public function setPrvoPoluvremeAway($prvoPoluvremeAway): void
    {
        $this->prvoPoluvremeAway = $prvoPoluvremeAway;
    }

    public function setVtoroPoluvremeAway($vtoroPoluvremeAway): void
    {
        $this->vtoroPoluvremeAway = $vtoroPoluvremeAway;
    }

    public function setTretoPoluvremeAway($tretoPoluvremeAway): void
    {
        $this->tretoPoluvremeAway = $tretoPoluvremeAway;
    }

    public function setCetvrtoPoluvremeAway($cetvrtoPoluvremeAway): void
    {
        $this->cetvrtoPoluvremeAway = $cetvrtoPoluvremeAway;
    }

    /**
     * @param mixed $away
     * 
     * @return void
     */
    public function setAway($away): void
    {
        $this->away = $away;
    }

    /**
     * @param mixed $datum
     * 
     * @return void
     */
    public function setDatum($datum): void
    {
        $this->datum = $datum;
    }

    /**
     * @param mixed $vreme
     * 
     * @return void
     */
    public function setVreme($vreme): void
    {
        $this->vreme = $vreme;
    }

    /**
     * @param mixed $sport
     * 
     * @return void
     */
    public function setSport($sport): void
    {
        $this->sport = $sport;
    }

    //Getters

    /**
     * @return [type]
     */
    public function getResultsID()
    {
        return $this->resultsID;
    }

    /**
     * @return [type]
     */
    public function getLeague()
    {
        return $this->league;
    }

    /**
     * @return [type]
     */
    public function getHome()
    {
        return $this->home;
    }

    public function getPrvoPoluvremeHome()
    {
        return $this->prvoPoluvremeHome;
    }

    public function getVtoroPoluvremeHome()
    {
        return $this->vtoroPoluvremeHome;
    }

    public function getTretoPoluvremeHome()
    {
        return $this->tretoPoluvremeHome;
    }

    public function getCetvrtoPoluvremeHome()
    {
        return $this->cetvrtoPoluvremeHome;
    }

    public function getKonecenHome()
    {
        return $this->konecenHome;
    }

    public function getKonecenAway()
    {
        return $this->konecenAway;
    }

    public function getPrvoPoluvremeAway()
    {
        return $this->prvoPoluvremeAway;
    }

    public function getVtoroPoluvremeAway()
    {
        return $this->vtoroPoluvremeAway;
    }

    public function getTretoPoluvremeAway()
    {
        return $this->tretoPoluvremeAway;
    }

    public function getCetvrtoPoluvremeAway()
    {
        return $this->cetvrtoPoluvremeAway;
    }

    /**
     * @return [type]
     */
    public function getAway()
    {
        return $this->away;
    }

    /**
     * @return [type]
     */
    public function getDatum()
    {
        return $this->datum;
    }

    /**
     * @return [type]
     */
    public function getVreme()
    {
        return $this->vreme;
    }

    /**
     * @return [type]
     */
    public function getSport()
    {
        return $this->sport;
    }
}
