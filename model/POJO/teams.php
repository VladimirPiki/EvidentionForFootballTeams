<?php

class Teams
{
    private $id;
    private $original_name;
    private $alternative_name;
    private $sport;
    private $ef_team;

    //Setters
    /**
     * @param mixed $id
     * 
     * @return [type]
     */
    public function setId($id)
    {
        $this->id = $id;
    }

    /**
     * @param mixed $original_name
     * 
     * @return [type]
     */
    public function setOriginalName($original_name)
    {
        $this->original_name = $original_name;
    }

    /**
     * @param mixed $alternative_name
     * 
     * @return [type]
     */
    public function setAlternativeName($alternative_name)
    {
        $this->alternative_name = $alternative_name;
    }

    /**
     * @param mixed $sport
     * 
     * @return [type]
     */
    public function setSport($sport)
    {
        $this->sport = $sport;
    }

    /**
     * @param mixed $el_team
     * 
     * @return [type]
     */
    public function setEfTeam($ef_team)
    {
        $this->ef_team = $ef_team;
    }

    //Getters

    /**
     * @return [type]
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @return [type]
     */
    public function getOriginalName()
    {
        return $this->original_name;
    }

    /**
     * @return [type]
     */
    public function getAlternativeName()
    {
        return $this->alternative_name;
    }

    /**
     * @return [type]
     */
    public function getSport()
    {
        return $this->sport;
    }

    /**
     * @return [type]
     */
    public function getEfTeam()
    {
        return $this->ef_team;
    }
}
