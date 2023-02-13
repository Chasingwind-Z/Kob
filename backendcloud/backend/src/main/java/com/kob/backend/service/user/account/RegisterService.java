package com.kob.backend.service.user.account;

import java.util.Map;

public interface RegisterService {
    public Map<String, String> register (String usrename, String password, String confirmPassword);
}
