<?php

class PremierLeague
{
    private $position;
    private $club;
    private $played;
    private $won;
    private $drawn;
    private $lost;
    private $gf;
    private $ga;
    private $gd;
    private $points;
    private $form;
    private $nextClub;

    public function setPosition($position)
    {
        $this->position = $position;
    }

    public function setClub($club)
    {
        $this->club = $club;
    }

    public function setPlayed($played)
    {
        $this->played = $played;
    }

    public function setWon($won)
    {
        $this->won = $won;
    }

    public function setDrawn($drawn)
    {
        $this->drawn = $drawn;
    }

    public function setLost($lost)
    {
        $this->lost = $lost;
    }

    public function setGf($gf)
    {
        $this->gf = $gf;
    }

    public function setGa($ga)
    {
        $this->ga = $ga;
    }

    public function setGd($gd)
    {
        $this->gd = $gd;
    }

    public function setPoints($points)
    {
        $this->points = $points;
    }

    public function setForm($form)
    {
        $this->form = $form;
    }

    public function setNextClub($nextClub)
    {
        $this->nextClub = $nextClub;
    }

    public function getPosition()
    {
        return $this->position;
    }

    public function getClub()
    {
        return $this->club;
    }

    public function getPlayed()
    {
        return $this->played;
    }

    public function getWon()
    {
        return $this->won;
    }

    public function getDrawn()
    {
        return $this->drawn;
    }

    public function getLost()
    {
        return $this->lost;
    }

    public function getGf()
    {
        return $this->gf;
    }

    public function getGa()
    {
        return $this->ga;
    }

    public function getGd()
    {
        return $this->gd;
    }

    public function getPoints()
    {
        return $this->points;
    }

    public function getForm()
    {
        return $this->form;
    }

    public function getNextClub()
    {
        return $this->nextClub;
    }
}
