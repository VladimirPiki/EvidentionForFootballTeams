<?php


class Moja
{
    private $id;
    private $ime;
    private $prezime;
    private $grad;
    private $firmaID;

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
     * @param mixed $ime
     * 
     * @return [type]
     */
    public function setIme($ime)
    {
        $this->ime = $ime;
    }

    /**
     * @param mixed $prezime
     * 
     * @return [type]
     */
    public function setPrezime($prezime)
    {
        $this->prezime = $prezime;
    }

    /**
     * @param mixed $grad
     * 
     * @return [type]
     */
    public function setGrad($grad)
    {
        $this->grad = $grad;
    }


    /**
     * @param mixed $firmaID
     * 
     * @return [type]
     */
    public function setFirmaID($firmaID)
    {
        $this->firmaID = $firmaID;
    }

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
    public function getIme()
    {
        return $this->ime;
    }

    /**
     * @return [type]
     */
    public function getPrezime()
    {
        return $this->prezime;
    }

    /**
     * @return [type]
     */
    public function getGrad()
    {
        return $this->grad;
    }

    /**
     * @return [type]
     */
    public function getFirmaID()
    {
        return $this->firmaID;
    }
}
