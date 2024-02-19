<?php

class Users
{
    private $users_id;
    private $username;
    private $password;


    //Setters
    /**
     * @param mixed $users_id
     * 
     * @return [type]
     */
    public function setUserID($users_id)
    {
        $this->users_id = $users_id;
    }
    /**
     * @param mixed $username
     * 
     * @return [type]
     */
    public function setUsername($username)
    {
        $this->username = $username;
    }
    /**
     * @param mixed $password
     * 
     * @return [type]
     */
    public function setPassword($password)
    {
        $this->password = $password;
    }

    //Getters
    /**
     * @return [type]
     */
    public function getUsersID()
    {
        return $this->users_id;
    }

    /**
     * @return [type]
     */
    public function getUsername()
    {
        return $this->username;
    }

    /**
     * @return [type]
     */
    public function getPassword()
    {
        return $this->password;
    }
}
