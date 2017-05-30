package br.com.previdencia.rest;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import br.com.previdencia.dto.DadosDTO;
import br.com.previdencia.dto.ParametrosDTO;  
@Path("/servicos") 

public class PrevidenciaService {   
	
	@POST
	@Produces({ MediaType.APPLICATION_JSON})
	@Path("/calcularPrevidencia")
	public List<DadosDTO> calcularPrevidencia(ParametrosDTO params) {
		//Tempo de previdência em meses
		int tempo = params.getTempo()*12;
		double salario = 5000;
		double valorArrecadadoX = 0;
		double valorArrecadadoY = 0;
		//Mes atual
		int mes = Integer.parseInt(new SimpleDateFormat("MM").format(new Date()));
		//Ano Atual
		int ano = Integer.parseInt(new SimpleDateFormat("yyyy").format(new Date()));
		List<DadosDTO> dados = new ArrayList<DadosDTO>();
		
		for(int x=0;x<tempo;x++){
			//Se mes for igual a 13, completa 1 ano e inicia novamente do mês 1
			if(mes==13){
				//Aumento anual de 6,5% no salário
				salario+=(salario*6.5/100);
				mes = 1;
				ano++;
			}
			valorArrecadadoX += ((salario*params.getContribuicaox())/100) + ((valorArrecadadoX*0.5)/100);			
			valorArrecadadoY += ((salario*params.getContribuicaoy())/100) + ((valorArrecadadoY*0.5)/100);
			dados.add(new DadosDTO(String.format("%.2f",salario), String.format("%.2f",valorArrecadadoX), String.format("%.2f",valorArrecadadoY), mes, ano));
			mes++;
		}
		
		return dados;
	}
   
}
