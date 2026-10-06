package com.clinic.backend.repository;

import com.clinic.backend.model.PacienteModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PacienteRepository extends JpaRepository<PacienteModel, Integer> {
}
